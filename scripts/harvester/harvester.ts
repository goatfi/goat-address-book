import dotenv from 'dotenv'
import { Hex, createPublicClient, createWalletClient, webSocket, parseEther } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { arbitrum } from 'viem/chains'
import { GOAT_FEE_BATCH } from '../../src/ts/ProtocolArbitrum'
import { WETH } from '../../src/ts/AssetsArbitrum'
import { StrategyAbi } from '../../abi/StrategyAbi'
import { ERC20Abi } from '../../abi/ERC20Abi'
import GoatVaults from '../../src/json/GoatVaults.json'
dotenv.config();

/// PARAMETERS
const harvestFrequency = 43200; // 12 hours
const feeBatchMinBalance = parseEther('0.02'); 
const broadcastTransactions = false;

const account = privateKeyToAccount(process.env.HARVESTER_PK as Hex); 
const publicClient = createPublicClient({ 
  chain: arbitrum,
  transport: webSocket(process.env.ARBITRUM_RPC_WEBSOCKET)
})

const walletClient = createWalletClient({
  account,
  chain: arbitrum,
  transport: webSocket(process.env.ARBITRUM_RPC_WEBSOCKET)
});

async function main() {
  const currentBlock = await publicClient.getBlock();

  for (let i = 0; i < GoatVaults.vaults.length; i++) {
    const strategy = await getStrategy(GoatVaults.vaults[i] as Hex);
    if(await isPaused(strategy)) continue;
    if(await strategyBelowMinBalance(strategy)) {
      console.log("Strategy below min balance:", strategy);
      continue;
    }

    const lastHarvest = await getLastHarvest(strategy);
    const timeSinceLastHarvest = Number(currentBlock.timestamp) - Number(lastHarvest);
    if(timeSinceLastHarvest >= harvestFrequency) await harvest(strategy);
  }

  const feeBatchBalance = await getFeeBatchBalance();
  if(feeBatchBalance >= feeBatchMinBalance) await harvest(GOAT_FEE_BATCH);
}

async function getStrategy(address: Hex) {
  return await publicClient.readContract({
    address,
    abi: StrategyAbi,
    functionName: 'strategy',
  });
}

async function isPaused(address: Hex) {
  return await publicClient.readContract({
    address,
    abi: StrategyAbi,
    functionName: 'paused',
  });
}

async function getLastHarvest(address: Hex) {
  return await publicClient.readContract({
    address,
    abi: StrategyAbi,
    functionName: 'lastHarvest',
  });
}

async function getFeeBatchBalance() {
  return await publicClient.readContract({
    address: WETH,
    abi: ERC20Abi,
    functionName: 'balanceOf',
    args: [GOAT_FEE_BATCH]
  });
}

async function getStrategyBalance(address: Hex) {
  return await publicClient.readContract({
    address,
    abi: StrategyAbi,
    functionName: 'balanceOf',
  });
}

async function strategyBelowMinBalance(address: Hex) {
  const balance = await getStrategyBalance(address);
  return balance < parseEther('0.01') && balance > parseEther('0.00001');
}

async function harvest(address: Hex) {
  const { request } = await publicClient.simulateContract({
    account,
    address,
    abi: StrategyAbi,
    functionName: 'harvest',
  });

  if(broadcastTransactions) await walletClient.writeContract(request);

  console.log("Harvested:", address);
}

main().then(() => process.exit());
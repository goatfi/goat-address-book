import dotenv from 'dotenv'
import { Hex, parseEther, parseGwei, formatGwei } from 'viem'
import { account, publicClient, walletClient } from './config';
import { arbitrum } from 'viem/chains'
import { Strategy } from './types';
import { GOAT_FEE_BATCH } from '../../src/ts/ProtocolArbitrum'
import { WETH } from '../../src/ts/AssetsArbitrum'
import { StrategyAbi } from '../../abi/StrategyAbi'
import { ERC20Abi } from '../../abi/ERC20Abi'
import GoatVaults from '../../src/json/GoatVaults.json'
dotenv.config();

/// PARAMETERS
const HARVEST_FREQUENCY = 12 * 60 * 60; // 12 hours in seconds
const FEE_BATCH_MIN_BALANCE = parseEther('0.02');
const MAX_FEE_PER_GAS = parseGwei('0.05');
const MIN_TVL_TO_HARVEST = 10;
const BROADCAST_TRANSACTIONS = Bun.argv.includes('--broadcast');

let tvlData;

async function main() {
  const blockTimestamp = await getBlockTimestamp();
  tvlData = await getTVLData()

  for (let i = 0; i < GoatVaults.vaults.length; i++) {
    const strategy = await buildStrategyData(GoatVaults.vaults[i] as Hex);
    if(strategy.paused) continue;
    if(strategy.tvl < MIN_TVL_TO_HARVEST) {
      console.log("Strategy below min TVL:", strategy.address, strategy.tvl);
      continue;
    }

    if(blockTimestamp - strategy.lastHarvest >= HARVEST_FREQUENCY) {
      try{
        await harvest(strategy.address);
      } catch(e) {
        console.log("Harvest Error:", strategy.address, e.message);
      }
    }
  }

  const feeBatchBalance = await getFeeBatchBalance();
  if(feeBatchBalance >= FEE_BATCH_MIN_BALANCE) await harvest(GOAT_FEE_BATCH);
}

async function harvest(address: Hex) {
  const { maxFeePerGas } = await publicClient.estimateFeesPerGas();
  if(!maxFeePerGas) {
    console.log("Could not estimate MaxFeePerGas");
    return;
  }
  if(maxFeePerGas > MAX_FEE_PER_GAS) {
    console.log(`Gas too high: ${formatGwei(maxFeePerGas)}, max allowed ${formatGwei(MAX_FEE_PER_GAS)}. ${address}`);
    return;
  }

  const { request } = await publicClient.simulateContract({
    account,
    address,
    abi: StrategyAbi,
    functionName: 'harvest',
  });
  
  if(BROADCAST_TRANSACTIONS) {
    const hash = await walletClient.writeContract(request);
    await publicClient.waitForTransactionReceipt({hash});
  }
  console.log(`Harvested: ${address} with gas price of: ${formatGwei(maxFeePerGas)}`);
}

async function getTVLData(){
  const response = await fetch('https://api.goat.fi/tvl');
  return await response.json();
};

async function buildStrategyData(vault: Hex): Promise<Strategy> {
  const tvl = await getTVL(vault, arbitrum.id.toString());
  const strategyAddress = await getStrategy(vault);
  const paused = await getPaused(strategyAddress);
  const lastHarvest = await getLastHarvest(strategyAddress);

  return {
    address: strategyAddress,
    tvl,
    paused,
    lastHarvest
  };
}

async function getStrategy(address: Hex): Promise<Hex> {
  return await publicClient.readContract({
    address,
    abi: StrategyAbi,
    functionName: 'strategy',
  });
}

async function getPaused(address: Hex): Promise<boolean> {
  return await publicClient.readContract({
    address,
    abi: StrategyAbi,
    functionName: 'paused',
  });
}

async function getLastHarvest(address: Hex): Promise<number> {
  return Number(await publicClient.readContract({
    address,
    abi: StrategyAbi,
    functionName: 'lastHarvest',
  }));
}

async function getFeeBatchBalance(): Promise<bigint> {
  return await publicClient.readContract({
    address: WETH,
    abi: ERC20Abi,
    functionName: 'balanceOf',
    args: [GOAT_FEE_BATCH]
  });
}

async function getTVL(address: Hex, chainId: string): Promise<number> {
  return tvlData[chainId][address];
}

async function getBlockTimestamp(): Promise<number> {
  return Number((await publicClient.getBlock()).timestamp);
}

main().then(() => process.exit());
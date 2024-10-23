import dotenv from 'dotenv'
import { parseEther, parseGwei, formatGwei } from 'viem'
import { account, getPublicClient, getWalletClient, } from './config';
import { arbitrum } from 'viem/chains';
import { GOAT_FEE_BATCH } from '../../src/ts/ProtocolArbitrum'
import { WETH } from '../../src/ts/AssetsArbitrum'
import { StrategyAbi } from '../../abi/StrategyAbi'
import { ERC20Abi } from '../../abi/ERC20Abi'
import Arbitrum from '../../src/json/VaultsArbitrum.json'
import Base from '../../src/json/VaultsBase.json'
import type { Strategy, APYBreakdownData, TVLData, ChainID } from './types';
import type { Hex } from 'viem';
dotenv.config();

/// PARAMETERS
const HARVEST_FREQUENCY = 12 * 60 * 60; // 12 hours in seconds
const FEE_BATCH_MIN_BALANCE = parseEther('0.005');
const MAX_FEE_PER_GAS = parseGwei('0.05');
const MIN_TVL_TO_HARVEST = 10;
const BROADCAST_TRANSACTIONS = Bun.argv.includes('--broadcast');

let tvlData: TVLData;
let apyBreakdownData: APYBreakdownData;

const chains = [Arbitrum, Base];

async function main() {
    tvlData = await getTVLData();
    apyBreakdownData = await getAPYBreakdownData();

    for (const chain of chains) {
        for (let i = 0; i < chain.vaults.length; i++) {
            const chainId = chain.chainId as ChainID;
            const blockTimestamp = await getBlockTimestamp(chainId);
            const strategy = await buildStrategyData(chain.vaults[i] as Hex, chainId);
            if (strategy.paused) continue;
            if (strategy.tvl < MIN_TVL_TO_HARVEST) {
                console.log("Strategy below min TVL:", strategy.address, strategy.tvl);
                continue;
            }
    
            if (strategy.vaultAPR <= 0) {
                console.log("Rewards APR is 0:", strategy.address);
                continue;
            }
    
            if (blockTimestamp - strategy.lastHarvest >= HARVEST_FREQUENCY) {
                try {
                    await harvest(strategy.address, chainId);
                } catch (e) {
                    console.log("Harvest Error:", strategy.address, e.message);
                }
            }
        }
    };
    
    const feeBatchBalance = await getFeeBatchBalance();
    if (feeBatchBalance >= FEE_BATCH_MIN_BALANCE) await harvest(GOAT_FEE_BATCH, Arbitrum.chainId as ChainID);
}

async function harvest(address: Hex, chainID: ChainID): Promise<void> {
    const publicClient = getPublicClient(chainID);
    const walletClient = getWalletClient(chainID);
    const { maxFeePerGas } = await publicClient.estimateFeesPerGas();
    if (!maxFeePerGas) {
        console.log("Could not estimate MaxFeePerGas");
        return;
    }
    if (maxFeePerGas > MAX_FEE_PER_GAS) {
        console.log(`Gas too high: ${formatGwei(maxFeePerGas)}, max allowed ${formatGwei(MAX_FEE_PER_GAS)}. ${address}`);
        return;
    }

    const { request } = await publicClient.simulateContract({
        account,
        address,
        abi: StrategyAbi,
        functionName: 'harvest',
    });

    if (BROADCAST_TRANSACTIONS) {
        const hash = await walletClient.writeContract(request);
        await publicClient.waitForTransactionReceipt({ hash });
    }
    console.log(`Harvested: ${address} with gas price of: ${formatGwei(maxFeePerGas)}`);
}

async function getTVLData(): Promise<TVLData> {
    const response = await fetch('https://api.goat.fi/tvl');
    return await response.json();
};

async function getAPYBreakdownData(): Promise<APYBreakdownData> {
    const response = await fetch('https://api.goat.fi/apy/breakdown');
    return await response.json();
}

async function buildStrategyData(vault: Hex, chainID: ChainID): Promise<Strategy> {
    const tvl = await getTVL(vault, arbitrum.id.toString()); 
    const strategyAddress = await getStrategy(vault, chainID);
    const paused = await getPaused(strategyAddress, chainID);
    const lastHarvest = await getLastHarvest(strategyAddress, chainID);
    const vaultAPR = await getVaultAPR(vault);

    return {
        address: strategyAddress,
        tvl,
        paused,
        lastHarvest,
        vaultAPR
    };
}

async function getStrategy(address: Hex, chainID: ChainID): Promise<Hex> {
    const publicClient = getPublicClient(chainID);
    return await publicClient.readContract({
        address,
        abi: StrategyAbi,
        functionName: 'strategy',
    });
}

async function getPaused(address: Hex, chainID: ChainID): Promise<boolean> {
    const publicClient = getPublicClient(chainID);
    return await publicClient.readContract({
        address,
        abi: StrategyAbi,
        functionName: 'paused',
    });
}

async function getLastHarvest(address: Hex, chainID: ChainID): Promise<number> {
    const publicClient = getPublicClient(chainID);
    return Number(await publicClient.readContract({
        address,
        abi: StrategyAbi,
        functionName: 'lastHarvest',
    }));
}

async function getVaultAPR(address: Hex): Promise<number> {
    return apyBreakdownData[address].vaultApr;
}

async function getFeeBatchBalance(): Promise<bigint> {
    const publicClient = getPublicClient(Arbitrum.chainId as ChainID);
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

async function getBlockTimestamp(chainID: ChainID): Promise<number> {
    const publicClient = getPublicClient(chainID);
    return Number((await publicClient.getBlock()).timestamp);
}

main().then(() => process.exit());
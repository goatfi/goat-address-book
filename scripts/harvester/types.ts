import type { Hex } from 'viem';

export type TVLData = {
    [chainId: string]: {
        [vaultAddress: string]: number;
    };
};

export type APYBreakdownData = {
    [vaultAddress: string]: {
        vaultApr: number;
    };
};

export interface Strategy {
    address: Hex;
    tvl: number;
    paused: boolean;
    lastHarvest: number;
    vaultAPR: number;
}

export type ChainID = 42161 | 8453;
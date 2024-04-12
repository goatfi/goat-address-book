import { Hex } from 'viem';

export interface Strategy {
    address: Hex;
    tvl: number;
    paused: boolean;
    lastHarvest: number;
  }
import { ChainId } from '@bgd-labs/js-utils';
import { NetworkAssets } from '../types';

export const baseAssets: NetworkAssets = {
    name: 'Base',
    chainId: ChainId.base,
    addresses: {
        WETH: '0x4200000000000000000000000000000000000006',
        WBTC: '0x0555E30da8f98308EdB960aa94C0Db47230d2B9c',
        USDC: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
        SILO: '0xF734eFdE0C424BA2B547b186586dE417b0954802',
        eUSD: '0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4',
        hyUSD: '0xCc7FF230365bD730eE4B352cC2492CEdAC49383e',
        tBTC: '0x236aa50979D5f3De3Bd1Eeb40E81137F22ab794b',
        cbBTC: '0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf',
        cbETH: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
        AERO: '0x940181a94A35A4569E4529A3CDfB74e38FD98631',
    }
};
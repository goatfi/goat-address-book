import { ChainId } from '@bgd-labs/js-utils';
import { NetworkAssets } from '../types';

export const arbitrumAssets: NetworkAssets = {
  name: 'Arbitrum',
  chainId: ChainId.arbitrum_one,
  addresses: {
    WETH: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    GOA: '0x8c6Bd546fB8B53fE371654a0E54D7a5bD484b319',
    ARB: '0x912CE59144191C1204E64559FE8253a0e49E6548',
    CRV: '0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978',
    CRVUSD: '0x498Bf2B1e120FeD3ad3D42EA2165E9b73f99C1e5',
  },
};
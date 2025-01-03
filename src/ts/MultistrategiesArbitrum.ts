import type {Multistrategy} from '../../scripts/configs/types';
export const name = 'Arbitrum';
export const chainId = 42161;
export const multistrategies: Multistrategy[] = [
  {
    name: 'Yield Chaser Silo ETH',
    address: '0x878b7897C60fA51c2A7bfBdd4E3cB5708D9eEE43',
    asset: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    oracleId: 'ETH',
    decimals: 18,
    status: 'active',
  },
  {
    name: 'Yield Chaser crvUSD',
    address: '0xA7781F1D982Eb9000BC1733E29Ff5ba2824cDBE5',
    asset: '0x498Bf2B1e120FeD3ad3D42EA2165E9b73f99C1e5',
    oracleId: 'crvUSD',
    decimals: 18,
    status: 'active',
  },
];

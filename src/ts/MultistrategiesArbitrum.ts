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
  {
    name: 'Yield Chaser Silo USDC',
    address: '0x8a1eF3066553275829d1c0F64EE8D5871D5ce9d3',
    asset: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    oracleId: 'arbUSDCe',
    decimals: 18,
    status: 'active',
  },
  {
    name: 'Yield Chaser ETH',
    address: '0xe1c410eefAeBB052E17E0cB6F1c3197F35765Aab',
    asset: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    oracleId: 'ETH',
    decimals: 18,
    status: 'active',
  },
  {
    name: 'Yield Chaser USDC',
    address: '0x0df2e3a0b5997AdC69f8768E495FD98A4D00F134',
    asset: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    oracleId: 'USDC',
    decimals: 18,
    status: 'active',
  },
  {
    name: 'Yield Chaser USDT',
    address: '0x3782bA74E32021dD2e2A7ADE5118E83440EE24E4',
    asset: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    oracleId: 'USDT',
    decimals: 18,
    status: 'active',
  },
];

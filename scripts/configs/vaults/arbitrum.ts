import { ChainId } from '@bgd-labs/js-utils';
import { NetworkVaults, NetworkStrategies } from '../types';

export const arbitrumVaults: NetworkVaults = {
  name: 'Arbitrum',
  chainId: ChainId.arbitrum_one,
  vaults: [
      '0x3475F10D46ABbb2e0176ca1b00949990B496B00c',
    ]
};

export const arbitrumStrategies: NetworkStrategies = {
    name: 'Arbitrum',
    chainId: ChainId.arbitrum_one,
    strategies: [
          '0x64318B0882B6595AA662751eE5966ae4019cac23'
      ]
};
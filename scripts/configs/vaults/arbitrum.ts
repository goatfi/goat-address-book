import { ChainId } from '@bgd-labs/js-utils';
import { NetworkVaults } from '../types';

export const arbitrumVaults: NetworkVaults = {
  name: 'Arbitrum',
  chainId: ChainId.arbitrum_one,
  vaults: [
      '0x3475F10D46ABbb2e0176ca1b00949990B496B00c',
    ]
};
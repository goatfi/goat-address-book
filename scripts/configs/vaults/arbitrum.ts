import { ChainId } from '@bgd-labs/js-utils';
import { NetworkVaults } from '../types';

export const arbitrumVaults: NetworkVaults = {
  name: 'Arbitrum',
  chainId: ChainId.arbitrum_one,
  vaults: [
      '0x3475F10D46ABbb2e0176ca1b00949990B496B00c',
      '0xD72c55c0f51F208A1ce905C7c24E5c3364335930',
      '0x420359d4f7cd4ec1d8D8a2225810ADD194405dA0',
      '0x306559074016481D432b0067cA2c583d6bdE8b84'
    ]
};
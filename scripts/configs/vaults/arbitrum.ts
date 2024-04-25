import type { Hex } from 'viem';
import { ChainId } from '@bgd-labs/js-utils';
import { NetworkVaults } from '../types';
import ArbitrumVaults from '../../../vault-registry/arbitrum.json';
import ArbitrumBoosts from '../../../vault-registry/boosts/arbitrum.json';

export const arbitrumVaults: NetworkVaults = {
  name: 'Arbitrum',
  chainId: ChainId.arbitrum_one,
  vaults: ArbitrumVaults.filter(vault => vault.status === 'active' && vault.type != 'gov').map(vault => vault.id) as Hex[],
  boosts: ArbitrumBoosts.filter(boost => boost.status === 'active').map(boost => boost.earnContractAddress) as Hex[]
};
import { ChainId } from '@bgd-labs/js-utils';
import ArbitrumVaults from '../../../vault-registry/arbitrum.json';
import ArbitrumBoosts from '../../../vault-registry/boosts/arbitrum.json';
import type { Hex } from 'viem';
import type { NetworkVaults, Vault, Boost } from '../types';

const vaults: Vault[] = ArbitrumVaults as Vault[];
const boosts: Boost[] = ArbitrumBoosts as Boost[];

export const arbitrumVaults: NetworkVaults = {
  name: 'Arbitrum',
  chainId: ChainId.arbitrum_one,
  vaults: vaults.filter(vault => vault.status === 'active' && vault.type !== 'gov').map(vault => vault.id) as Hex[],
  boosts: boosts.filter(boost => boost.status === 'active').map(boost => boost.earnContractAddress) as Hex[]
};
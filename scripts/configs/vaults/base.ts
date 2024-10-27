
import { ChainId } from '@bgd-labs/js-utils';
//import BaseVaults from '../../../vault-registry/base.json';
//import BaseBoosts from '../../../vault-registry/boosts/base.json';
import type { Hex } from 'viem';
import type { NetworkVaults, Vault, Boost } from '../types';

/*const vaults: Vault[] = BaseVaults as Vault[];
const boosts: Boost[] = BaseBoosts as Boost[];

export const baseVaults: NetworkVaults = {
  name: 'Base',
  chainId: ChainId.base,
  vaults: vaults.filter(vault => vault.status === 'active' && vault.type !== 'gov').map(vault => vault.id) as Hex[],
  boosts: boosts.filter(boost => boost.status === 'active').map(boost => boost.earnContractAddress) as Hex[]
};*/
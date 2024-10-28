import { ChainId } from '@bgd-labs/js-utils';
import ArbitrumMultistrategies from '../../../vault-registry/multistrategies/arbitrum.json';
import type { Multistrategy, NetworkMultistrategies  } from '../types';

const multistrategies: Multistrategy[] = ArbitrumMultistrategies as Multistrategy[];

export const arbitrumMultistrategies: NetworkMultistrategies = {
  name: 'Arbitrum',
  chainId: ChainId.arbitrum_one,
  multistrategies
};
import type { Hex } from 'viem';

interface KnownInterfaces<T extends number | Hex = number> {
	value: T;
	type: T extends number ? 'uint256' : 'address' | string;
	chainId?: number;
}

export type AddressInfo = Hex | KnownInterfaces;
export type Addresses = Record<Uppercase<string>, AddressInfo>;

/**
 * @dev config for addresses that belong more to a network then to a specific pool
 */
export interface NetworkAddresses {
	name: string;
	chainId: number;
	addresses: Record<string, Hex>;
}

/**
 * @dev config for asset addresses on a certain network
 */
export interface NetworkAssets {
	name: string;
	chainId: number;
	addresses: Record<string, `0x${string}`>;
}

export interface NetworkVaults {
	name: string;
	chainId: number;
	vaults: Hex[];
	boosts?: Hex[];
}

export interface NetworkMultistrategies {
	name: string;
	chainId: number;
	multistrategies: Multistrategy[];
}

export interface Multistrategy {
	name: string;
	address: Hex;
	asset: Hex;
	oracleId: string;
	decimals: number;
	status: string;
}

export interface Vault {
	id: Hex;
	status: string;
	type: string;
}

export interface Boost {
	earnContractAddress: Hex;
	status: string;
}

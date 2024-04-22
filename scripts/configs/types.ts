import type { Hex } from 'viem';

interface KnownInterfaces<T extends number | Hex = any> {
  value: T;
  type: T extends number ? 'uint256' : 'address' | string;
  chainId?: number;
}

export type AddressInfo = Hex | KnownInterfaces;
export type Addresses = Record<Uppercase<string>, AddressInfo>;


/**
 * @dev config for addresses that belong more to a network then to a specific pool
 */
export interface NetworkAddresses<T extends Record<string, AddressInfo> = {}> {
  name: string;
  chainId: number;
  addresses: {
    TREASURY: Hex;
    TIMELOCK: Hex;
    FEE_CONFIG: Hex;
    MULTICALL: Hex;
    GOAT_APP_MULTICALL: Hex;
    GOAT_VAULT_FACTORY: Hex;
    GOAT_BOOST_FACTORY: Hex;
    LAYERZERO_BRIDGE_ADAPTER: Hex;
    GOAT_FEE_BATCH: Hex;
    GOAT_REWARD_POOL?: Hex;
    GOAT_SWAPPER?: Hex;
    UNISWAP_POSITION_HELPER?: Hex;
  } & T;
}

/**
 * @dev config for asset addresses on a certain network
 */
export interface NetworkAssets<T extends Record<string, AddressInfo> = {}> {
  name: string;
  chainId: number;
  addresses: {
    WETH?: Hex;
    WBTC?: Hex;
    GOA?: Hex;
    ARB?: Hex;
    CRV?: Hex;
    CRVUSD?: Hex;
    USDT?: Hex;
    USDC?: Hex;
    USDCe?: Hex;
    MIM?: Hex;
    PENDLE?: Hex;
    EQB?: Hex;
    WSTETH?: Hex;
    SILO?: Hex;
    BAL?: Hex;
    AURA?: Hex;
    VRSW?: Hex;
  } & T;
}

export interface NetworkVaults<T extends Record<string, AddressInfo> = {}> {
  name: string;
  chainId: number;
  vaults: Hex[];
}
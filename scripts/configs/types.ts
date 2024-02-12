import type { Hex } from 'viem';

interface KnownInterfaces<T extends number | Hex = any> {
  value: T;
  type: T extends number ? 'uint256' : 'address' | string;
  chainId?: number;
}

export type AddressInfo = Hex | KnownInterfaces;

export type Addresses = Record<Uppercase<string>, AddressInfo>;

export type GovernanceV3Addresses = {
  CROSS_CHAIN_CONTROLLER?: Hex;
  GOVERNANCE?: Hex;
  VOTING_MACHINE?: Hex;
  PAYLOADS_CONTROLLER?: Hex;
  VOTING_PORTAL_ETH_ETH?: Hex;
  VOTING_PORTAL_ETH_AVAX?: Hex;
  VOTING_PORTAL_ETH_POL?: Hex;
  CL_EMERGENCY_ORACLE?: Hex;
  VM_DATA_HELPER?: Hex;
  GOV_DATA_HELPER?: Hex;
  PC_DATA_HELPER?: Hex;
  META_DELEGATE_HELPER?: Hex;
  EMERGENCY_REGISTRY?: Hex;
  GOVERNANCE_POWER_STRATEGY?: Hex;
};

export interface GovernanceConfig {
  name: string;
  CHAIN_ID: number;
  ADDRESSES: GovernanceV3Addresses;
}

export interface PoolConfig {
  name: string;
  chainId: number;
  POOL_ADDRESSES_PROVIDER: Hex;
  // will be inlined in js pool export
  additionalAddresses: {
    FAUCET?: Hex;
    WETH_GATEWAY?: Hex;
    REPAY_WITH_COLLATERAL_ADAPTER?: Hex;
    SWAP_COLLATERAL_ADAPTER?: Hex;
    DEBT_SWAP_ADAPTER?: Hex;
    WITHDRAW_SWAP_ADAPTER?: Hex;
    SAVINGS_DAI_TOKEN_WRAPPER?: Hex;
    POOL_ADDRESSES_PROVIDER_REGISTRY?: Hex;
    CONFIG_ENGINE?: Hex;
    MIGRATION_HELPER?: Hex;
    UI_POOL_DATA_PROVIDER?: Hex;
    UI_INCENTIVE_DATA_PROVIDER?: Hex;
    L2_ENCODER?: Hex;
    PROOF_OF_RESERVE?: Hex;
    PROOF_OF_RESERVE_AGGREGATOR?: Hex;
    DELEGATION_AWARE_A_TOKEN_IMPL_REV_1?: Hex;
    STATIC_A_TOKEN_FACTORY?: Hex;
    CAPS_PLUS_RISK_STEWARD?: Hex;
    FREEZING_STEWARD?: Hex;
    UI_GHO_DATA_PROVIDER?: Hex;
    RATES_FACTORY?: Hex;
    PERMISSION_MANAGER?: Hex;
    WALLET_BALANCE_PROVIDER?: Hex;
  };
  // will be used for pending pools where the impls can't be fetched yet
  initial?: {
    COLLECTOR?: Hex;
    DEFAULT_A_TOKEN_IMPL?: Hex;
    DEFAULT_VARIABLE_DEBT_TOKEN_IMPL?: Hex;
    DEFAULT_STABLE_DEBT_TOKEN_IMPL?: Hex;
  };
}

export type ReserveData = {
  symbol: string;
  UNDERLYING: Hex;
  decimals: number;
  A_TOKEN: Hex;
  S_TOKEN: Hex;
  V_TOKEN: Hex;
  INTEREST_RATE_STRATEGY: Hex;
  ORACLE: Hex;
  STATA_TOKEN?: Hex;
};

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
    LAYERZERO_BRIDGE_ADAPTER: Hex;
    GOAT_FEE_BATCH: Hex;
    GOAT_REWARD_POOL?: Hex;
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
    GOA?: Hex;
    ARB?: Hex;
    CRV?: Hex;
    CRVUSD?: Hex;
  } & T;
}
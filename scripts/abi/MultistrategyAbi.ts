export const MultistrategyAbi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_asset',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_manager',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_protocolFeeRecipient',
				type: 'address',
			},
			{
				internalType: 'string',
				name: '_name',
				type: 'string',
			},
			{
				internalType: 'string',
				name: '_symbol',
				type: 'string',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'target',
				type: 'address',
			},
		],
		name: 'AddressEmptyCode',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'AddressInsufficientBalance',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'multAsset',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'stratAsset',
				type: 'address',
			},
		],
		name: 'AssetMismatch',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'caller',
				type: 'address',
			},
		],
		name: 'CallerNotGuardian',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'caller',
				type: 'address',
			},
		],
		name: 'CallerNotManager',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'debtRatio',
				type: 'uint256',
			},
		],
		name: 'DebtRatioAboveMaximum',
		type: 'error',
	},
	{
		inputs: [],
		name: 'DuplicateStrategyInArray',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'allowance',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'needed',
				type: 'uint256',
			},
		],
		name: 'ERC20InsufficientAllowance',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'balance',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'needed',
				type: 'uint256',
			},
		],
		name: 'ERC20InsufficientBalance',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'approver',
				type: 'address',
			},
		],
		name: 'ERC20InvalidApprover',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'receiver',
				type: 'address',
			},
		],
		name: 'ERC20InvalidReceiver',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
		],
		name: 'ERC20InvalidSender',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
		],
		name: 'ERC20InvalidSpender',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'receiver',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'assets',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'max',
				type: 'uint256',
			},
		],
		name: 'ERC4626ExceededMaxDeposit',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'receiver',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'shares',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'max',
				type: 'uint256',
			},
		],
		name: 'ERC4626ExceededMaxMint',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'shares',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'max',
				type: 'uint256',
			},
		],
		name: 'ERC4626ExceededMaxRedeem',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'assets',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'max',
				type: 'uint256',
			},
		],
		name: 'ERC4626ExceededMaxWithdraw',
		type: 'error',
	},
	{
		inputs: [],
		name: 'EnforcedPause',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'fee',
				type: 'uint256',
			},
		],
		name: 'ExcessiveFee',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ExpectedPause',
		type: 'error',
	},
	{
		inputs: [],
		name: 'FailedInnerCall',
		type: 'error',
	},
	{
		inputs: [],
		name: 'GainLossMismatch',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'currentBalance',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'InsufficientBalance',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'assets',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'liquidity',
				type: 'uint256',
			},
		],
		name: 'InsufficientLiquidity',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'InvalidAddress',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidDebtDelta',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidStrategyLoss',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidWithdrawOrder',
		type: 'error',
	},
	{
		inputs: [],
		name: 'MathOverflowedMulDiv',
		type: 'error',
	},
	{
		inputs: [],
		name: 'MaximumAmountStrategies',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
		],
		name: 'OwnableInvalidOwner',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'OwnableUnauthorizedAccount',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
		],
		name: 'SafeERC20FailedOperation',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'amount0',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amount1',
				type: 'uint256',
			},
		],
		name: 'SlippageCheckFailed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'StrategiesLengthMismatch',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'strategy',
				type: 'address',
			},
		],
		name: 'StrategyAlreadyActive',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'strategy',
				type: 'address',
			},
		],
		name: 'StrategyNotActive',
		type: 'error',
	},
	{
		inputs: [],
		name: 'StrategyNotRetired',
		type: 'error',
	},
	{
		inputs: [],
		name: 'StrategyWithOutstandingDebt',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ZeroAddress',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'ZeroAmount',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
		],
		name: 'Approval',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'strategy',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'CreditRequested',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'assets',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'shares',
				type: 'uint256',
			},
		],
		name: 'Deposit',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
		],
		name: 'Deposit',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: '_depositLimit',
				type: 'uint256',
			},
		],
		name: 'DepositLimitSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_guardian',
				type: 'address',
			},
		],
		name: 'GuardianEnabled',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_guardian',
				type: 'address',
			},
		],
		name: 'GuardianRevoked',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_manager',
				type: 'address',
			},
		],
		name: 'ManagerSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'Paused',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: '_performanceFee',
				type: 'uint256',
			},
		],
		name: 'PerformanceFeeSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_protocolFeeRecipient',
				type: 'address',
			},
		],
		name: 'ProtocolFeeRecipientSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: '_slippageLimit',
				type: 'uint256',
			},
		],
		name: 'SlippageLimitSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_strategy',
				type: 'address',
			},
		],
		name: 'StrategyAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_strategy',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_debtRatio',
				type: 'uint256',
			},
		],
		name: 'StrategyDebtRatioSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_strategy',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_maxDebtDelta',
				type: 'uint256',
			},
		],
		name: 'StrategyMaxDebtDeltaSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_strategy',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_minDebtDelta',
				type: 'uint256',
			},
		],
		name: 'StrategyMinDebtDeltaSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_strategy',
				type: 'address',
			},
		],
		name: 'StrategyRemoved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'strategy',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'debtRepaid',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'gain',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'loss',
				type: 'uint256',
			},
		],
		name: 'StrategyReported',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_strategy',
				type: 'address',
			},
		],
		name: 'StrategyRetired',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
		],
		name: 'Transfer',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'Unpaused',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'receiver',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'assets',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'shares',
				type: 'uint256',
			},
		],
		name: 'Withdraw',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Withdraw',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [],
		name: 'WithdrawOrderSet',
		type: 'event',
	},
	{
		inputs: [],
		name: 'PROFIT_UNLOCK_TIME',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'activeStrategies',
		outputs: [
			{
				internalType: 'uint8',
				name: '',
				type: 'uint8',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_strategy',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_debtRatio',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_minDebtDelta',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_maxDebtDelta',
				type: 'uint256',
			},
		],
		name: 'addStrategy',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
		],
		name: 'allowance',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'spender',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
		],
		name: 'approve',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'asset',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'balanceOf',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'shares',
				type: 'uint256',
			},
		],
		name: 'convertToAssets',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'assets',
				type: 'uint256',
			},
		],
		name: 'convertToShares',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_strategy',
				type: 'address',
			},
		],
		name: 'creditAvailable',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_strategy',
				type: 'address',
			},
		],
		name: 'debtExcess',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'debtRatio',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'decimals',
		outputs: [
			{
				internalType: 'uint8',
				name: '',
				type: 'uint8',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_assets',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_receiver',
				type: 'address',
			},
		],
		name: 'deposit',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'depositLimit',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_guardian',
				type: 'address',
			},
		],
		name: 'enableGuardian',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_strategy',
				type: 'address',
			},
		],
		name: 'getStrategyParameters',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'activation',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'debtRatio',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'lastReport',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'minDebtDelta',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'maxDebtDelta',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'totalDebt',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'totalGain',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'totalLoss',
						type: 'uint256',
					},
				],
				internalType: 'struct MStrat.StrategyParams',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getWithdrawOrder',
		outputs: [
			{
				internalType: 'address[]',
				name: '',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'guardianAddress',
				type: 'address',
			},
		],
		name: 'guardians',
		outputs: [
			{
				internalType: 'bool',
				name: 'isActive',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'lastReport',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'lockedProfit',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'lockedProfitDegradation',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'manager',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'maxDeposit',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_receiver',
				type: 'address',
			},
		],
		name: 'maxMint',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
		],
		name: 'maxRedeem',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
		],
		name: 'maxWithdraw',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_shares',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_receiver',
				type: 'address',
			},
		],
		name: 'mint',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'name',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'pause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'paused',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'performanceFee',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'assets',
				type: 'uint256',
			},
		],
		name: 'previewDeposit',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'shares',
				type: 'uint256',
			},
		],
		name: 'previewMint',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_shares',
				type: 'uint256',
			},
		],
		name: 'previewRedeem',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_assets',
				type: 'uint256',
			},
		],
		name: 'previewWithdraw',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'pricePerShare',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'protocolFeeRecipient',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_shares',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_receiver',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
		],
		name: 'redeem',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_strategy',
				type: 'address',
			},
		],
		name: 'removeStrategy',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'requestCredit',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_recipient',
				type: 'address',
			},
		],
		name: 'rescueToken',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_strategy',
				type: 'address',
			},
		],
		name: 'retireStrategy',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_guardian',
				type: 'address',
			},
		],
		name: 'revokeGuardian',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_depositLimit',
				type: 'uint256',
			},
		],
		name: 'setDepositLimit',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_manager',
				type: 'address',
			},
		],
		name: 'setManager',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_performanceFee',
				type: 'uint256',
			},
		],
		name: 'setPerformanceFee',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_protocolFeeRecipient',
				type: 'address',
			},
		],
		name: 'setProtocolFeeRecipient',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_slippageLimit',
				type: 'uint256',
			},
		],
		name: 'setSlippageLimit',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_strategy',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_debtRatio',
				type: 'uint256',
			},
		],
		name: 'setStrategyDebtRatio',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_strategy',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_maxDebtDelta',
				type: 'uint256',
			},
		],
		name: 'setStrategyMaxDebtDelta',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_strategy',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_minDebtDelta',
				type: 'uint256',
			},
		],
		name: 'setStrategyMinDebtDelta',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_strategies',
				type: 'address[]',
			},
		],
		name: 'setWithdrawOrder',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'slippageLimit',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'strategyAddress',
				type: 'address',
			},
		],
		name: 'strategies',
		outputs: [
			{
				internalType: 'uint256',
				name: 'activation',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'debtRatio',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'lastReport',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'minDebtDelta',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'maxDebtDelta',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'totalDebt',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'totalGain',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'totalLoss',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_debtRepayment',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_gain',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_loss',
				type: 'uint256',
			},
		],
		name: 'strategyReport',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_strategy',
				type: 'address',
			},
		],
		name: 'strategyTotalDebt',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'symbol',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalAssets',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalDebt',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalSupply',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
		],
		name: 'transfer',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
		],
		name: 'transferFrom',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'unpause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_assets',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_receiver',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
		],
		name: 'withdraw',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'withdrawOrder',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
];

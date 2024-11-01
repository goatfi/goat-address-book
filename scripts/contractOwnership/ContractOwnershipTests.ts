import dotenv from 'dotenv';
import { createPublicClient, webSocket } from 'viem';
import { arbitrum, base } from 'viem/chains';
import {
	ProtocolArbitrum,
	VaultsArbitrum,
	MultistrategiesArbitrum,
	ProtocolBase,
	VaultsBase,
} from '../../src/ts/GoatAddressBook';
import { OwnerAbi } from '../abi/OwnerAbi';
import { GoatVaultAbi } from '../abi/GoatVaultAbi';
import { MultistrategyAbi } from '../abi/MultistrategyAbi';
import type { Hex, PublicClient } from 'viem';
import type { ChainId } from './types';

dotenv.config();

const client = (chain: ChainId): PublicClient => {
	switch (chain) {
		case 42161:
			return createPublicClient({
				chain: arbitrum,
				transport: webSocket(process.env.ARBITRUM_WEBSOCKET),
			}) as PublicClient;
		case 8453:
			return createPublicClient({
				chain: base,
				transport: webSocket(process.env.BASE_WEBSOCKET),
			}) as PublicClient;
		default:
			throw `==== NO CLIENT FOUND FOR ${String(chain).toUpperCase()} ====`;
	}
};

const vaults = [VaultsArbitrum, VaultsBase];
const multistrategies = [MultistrategiesArbitrum];

const main = async () => {
	let pass = true;
	for (const chainVaults of vaults) {
		const viemClient = client(chainVaults.chainId);
		const desiredOwner = getDesiredOwner(chainVaults.chainId);
		let invalidOwners = 0;
		for (const vault of chainVaults.vaults) {
			let isValidOwner = await checkOwnership(vault, desiredOwner, viemClient);
			if (!isValidOwner) {
				invalidOwners++;
				printOwnerError(vault, chainVaults.chainId);
			}
			const strategy = await getStrategy(vault, viemClient);
			isValidOwner = await checkOwnership(strategy, desiredOwner, viemClient);
			if (!isValidOwner) {
				invalidOwners++;
				printOwnerError(strategy, chainVaults.chainId);
			}
		}

		if (invalidOwners === 0)
			printSuccess(`All Vaults and Strategies on ${chainVaults.chainId} have the Timelock as owner`);
		else pass = false;
	}

	for (const chainMultistrategies of multistrategies) {
		const viemClient = client(chainMultistrategies.chainId);
		const desiredOwner = getDesiredOwner(chainMultistrategies.chainId);
		const desiredManager = getDesiredManager(chainMultistrategies.chainId);
		let invalidOwners = 0;
		let invalidManagers = 0;
		for (const multistrategy of chainMultistrategies.multistrategies) {
			const isValidOwner = await checkOwnership(multistrategy.address, desiredOwner, viemClient);
			let isValidManager = await checkManager(multistrategy.address, desiredManager, viemClient);
			if (!isValidOwner) {
				invalidOwners++;
				printOwnerError(multistrategy.address, chainMultistrategies.chainId);
			}
			if (!isValidManager) {
				invalidManagers++;
				printManagerError(multistrategy.address, chainMultistrategies.chainId);
			}
			const multistrategyAdapters = await getAdapters(multistrategy.address, viemClient);
			for (const adapter of multistrategyAdapters) {
				isValidManager = await checkOwnership(adapter, desiredManager, viemClient);
				if (!isValidManager) {
					invalidManagers++;
					printManagerError(adapter, chainMultistrategies.chainId);
				}
			}
		}
		if (invalidOwners === 0)
			printSuccess(`All Multistrategies on ${chainMultistrategies.chainId} have the Timelock as owner`);
		else pass = false;
        if (invalidManagers === 0)
            printSuccess(`All Multistrategy Adapters on ${chainMultistrategies.chainId} have the Multistrategy Manager as Manager`);
	}

	if (!pass) throw new Error("Some owners or managers aren't correctly set");
};

const getDesiredOwner = (chain: ChainId): Hex => {
	switch (chain) {
		case 42161:
			return ProtocolArbitrum.TIMELOCK;
		case 8453:
			return ProtocolBase.TIMELOCK;
		default:
			throw `==== NO OWNER FOUND FOR ${String(chain).toUpperCase()} ====`;
	}
};

const getDesiredManager = (chain: ChainId): Hex => {
	switch (chain) {
		case 42161:
			return ProtocolArbitrum.MULTISTRATEGY_MANAGER;
		case 8453:
			return ProtocolBase.TREASURY;
		default:
			throw `==== NO MANAGER FOUND FOR ${String(chain).toUpperCase()} ====`;
	}
};

async function getStrategy(address: Hex, client: PublicClient): Promise<Hex> {
	return (await client.readContract({
		address,
		abi: GoatVaultAbi,
		functionName: 'strategy',
	})) as Hex;
}

const getAdapters = async (address: Hex, client: PublicClient): Promise<Hex[]> => {
	const adapters = (await client.readContract({
		address: address,
		abi: MultistrategyAbi,
		functionName: 'getWithdrawOrder',
	})) as Hex[];
	const filteredAdapters = adapters.filter((adapter) => adapter !== '0x0000000000000000000000000000000000000000');
	return filteredAdapters;
};

const checkOwnership = async (target: Hex, desiredOwner: Hex, client: PublicClient): Promise<boolean> => {
	const owner = (await client.readContract({
		address: target,
		abi: OwnerAbi,
		functionName: 'owner',
	})) as Hex;

	return owner === desiredOwner;
};

const checkManager = async (target: Hex, desiredManager: Hex, client: PublicClient): Promise<boolean> => {
	const manager = (await client.readContract({
		address: target,
		abi: MultistrategyAbi,
		functionName: 'manager',
	})) as Hex;

	return manager === desiredManager;
};

const printSuccess = (msg: string): void => {
	console.log('\u001b[1;32m', msg, '\u001b[0m');
};

const printOwnerError = (target: Hex, chain: ChainId): void => {
	console.log('\u001b[1;31m Owner not Timelock', target, chain, '\u001b[0m');
};

const printManagerError = (target: Hex, chain: ChainId): void => {
	console.log('\u001b[1;31m Manager not Multisig', target, chain, '\u001b[0m');
};

main().then(() => {
	process.exit(0); // Force exit
});

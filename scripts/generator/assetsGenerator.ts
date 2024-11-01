import * as fs from 'node:fs';
import {
	generateJsConstants,
	generateSolidityConstants,
	prefixWithGeneratedWarning,
	prefixWithPragma,
	wrapIntoSolidityLibrary,
} from './utils';
import type { NetworkAddresses } from '../configs/types';

export function generateAssetsAddresses(config: NetworkAddresses) {
	const name = `Assets${config.name}`;

	const solidityLibrary = wrapIntoSolidityLibrary(
		generateSolidityConstants({ chainId: config.chainId, addresses: config.addresses }),
		name,
	);

	fs.writeFileSync(`./src/sol/${name}.sol`, prefixWithGeneratedWarning(prefixWithPragma(solidityLibrary)));
	fs.writeFileSync(
		`./src/ts/${name}.ts`,
		prefixWithGeneratedWarning(
			generateJsConstants({
				chainId: config.chainId,
				addresses: { ...config.addresses, CHAIN_ID: { value: config.chainId, type: 'uint256' } },
			}).join('\n'),
		),
	);
	return {
		js: [`export * as ${name} from './${name}';`],
		solidity: [`import {${name}} from './${name}.sol';`],
	};
}

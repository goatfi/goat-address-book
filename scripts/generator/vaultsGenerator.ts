import * as fs from 'node:fs';
import type { NetworkVaults } from '../configs/types';

export function generateVaultAddresses(config: NetworkVaults) {
    const name = `Vaults${config.name}`;

    if (config.vaults.length > 0) {
        const data = `import type { Hex } from 'viem'; 
        export const name = "${config.name}";
        export const chainId = ${config.chainId};
        export const vaults: Hex[] = [
            "${config.vaults}"
        ];`;
        fs.writeFileSync(`./src/ts/${name}.ts`, data, 'utf-8');
        return {
            js: [`export * as ${name} from './${name}';`]
        };
    }

    const data = `import type { Hex } from 'viem'; 
    export const name = "${config.name}";
    export const chainId = ${config.chainId};
    export const vaults: Hex[] = [];`;
    fs.writeFileSync(`./src/ts/${name}.ts`, data, 'utf-8');
    return {
        js: [`export * as ${name} from './${name}';`]
    };
}
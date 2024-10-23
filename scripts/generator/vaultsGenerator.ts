import * as fs from 'node:fs';
import type { NetworkVaults } from '../configs/types';

export function generateVaultAddresses(config: NetworkVaults) {
    const name = `Vaults${config.name}`;

    fs.writeFileSync(
        `./src/json/${name}.json`,
        JSON.stringify(config)
    );
}
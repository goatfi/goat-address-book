import * as fs from 'fs';
import { NetworkVaults } from '../configs/types';

export function generateVaultAddresses(config: NetworkVaults<any>) {
    const name = `Vaults${config.name}`;

    fs.writeFileSync(
        `./src/json/${name}.json`,
        JSON.stringify(config)
    );
}
import * as fs from 'node:fs';
import type { NetworkMultistrategies } from '../configs/types';

export function generateMultistrategyAddresses(config: NetworkMultistrategies) {
    const name = `Multistrategies${config.name}`;

    fs.writeFileSync(
        `./src/json/${name}.json`,
        JSON.stringify(config)
    );
}
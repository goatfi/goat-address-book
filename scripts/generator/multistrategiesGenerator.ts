import * as fs from 'node:fs';
import type { NetworkMultistrategies } from '../configs/types';

export function generateMultistrategyAddresses(config: NetworkMultistrategies) {
    const name = `Multistrategies${config.name}`;
    const multistrategiesArray = config.multistrategies.map((multistrategy) => {
        return `{
          name: "${multistrategy.name}",
          address: "${multistrategy.address}",
          asset: "${multistrategy.asset}",
          oracleId: "${multistrategy.oracleId}",
          decimals: ${multistrategy.decimals},
          status: "${multistrategy.status}"
        }`;
    }).join(',\n');

    const data = `import type { Multistrategy } from '../../scripts/configs/types'; 
    export const name = "${config.name}";
    export const chainId = ${config.chainId};
    export const multistrategies: Multistrategy[] = [
        ${multistrategiesArray}
    ];
    `;
    fs.writeFileSync(`./src/ts/${name}.ts`, data, 'utf-8');
    return {
        js: [`export * as ${name} from './${name}';`]
    };
};
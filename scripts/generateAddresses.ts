import { appendFileSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'fs';
import { prefixWithGeneratedWarning, prefixWithPragma } from './generator/utils';
import { generateNetworkAddresses } from './generator/networkGenerator';
import { generateAssetsAddresses } from './generator/assetsGenerator';
import { arbitrumAddresses } from './configs/networks/arbitrum';
import { arbitrumAssets } from './configs/assets/arbitrum';
import { arbitrumVaults, arbitrumStrategies } from './configs/vaults/arbitrum';

async function main() {
  // cleanup ts artifacts
  if (existsSync('./src/ts')) {
    const files = readdirSync('./src/ts');
    for (const file of files) {
      rmSync(`./src/ts/${file}`);
    }
  } else {
    mkdirSync('./src/ts');
  }

  const networkAddresses = [arbitrumAddresses].map((addresses) => generateNetworkAddresses(addresses));
  const assetAddresses = [arbitrumAssets].map((addresses) => generateAssetsAddresses(addresses));
  const vaultAddresses = [arbitrumVaults].map((addresses) => JSON.stringify(addresses));
  const strategyAddresses = [arbitrumStrategies].map((addresses) => JSON.stringify(addresses));

  const imports = [networkAddresses, assetAddresses].flat();

  const jsExports = [...imports.map((f) => f.js).flat()];
  writeFileSync(`./src/ts/GoatAddressBook.ts`, prefixWithGeneratedWarning(''));
  jsExports.map((jsExport) => appendFileSync('./src/ts/GoatAddressBook.ts', `${jsExport}\n`));

  const solidityImports = imports.map((f) => f.solidity).flat();

  writeFileSync(`./src/GoatAddressBook.sol`, prefixWithGeneratedWarning(prefixWithPragma('')));
  solidityImports.map((solExport) => appendFileSync('./src/GoatAddressBook.sol', solExport));

  writeFileSync('./src/GoatVaults.json', vaultAddresses.join(`\n`));
  writeFileSync('./src/GoatStrategies.json', strategyAddresses.join(`\n`));
}

main();
import { appendFileSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { prefixWithGeneratedWarning, prefixWithPragma } from './generator/utils';
import { generateNetworkAddresses } from './generator/networkGenerator';
import { generateAssetsAddresses } from './generator/assetsGenerator';
//import { generateVaultAddresses } from './generator/vaultsGenerator';
import { arbitrumAddresses } from './configs/networks/arbitrum';
import { arbitrumAssets } from './configs/assets/arbitrum';
//import { arbitrumVaults } from './configs/vaults/arbitrum';
import { baseAddresses } from './configs/networks/base';
import { baseAssets } from './configs/assets/base';
//import { baseVaults } from './configs/vaults/base';

async function main() {
  if (existsSync('./src/ts')) {
    const files = readdirSync('./src/ts');
    for (const file of files) {
      rmSync(`./src/ts/${file}`);
    }
  } else {
    mkdirSync('./src/ts');
  }

  const networkAddresses = [arbitrumAddresses, baseAddresses].map((addresses) => generateNetworkAddresses(addresses));
  const assetAddresses = [arbitrumAssets, baseAssets].map((addresses) => generateAssetsAddresses(addresses));
  //const vaultAddresses = [arbitrumVaults, baseVaults].map((addresses) => generateVaultAddresses(addresses));

  const imports = [networkAddresses, assetAddresses].flat();

  const jsExports = [...imports.flatMap((f) => f.js)];
  writeFileSync('./src/ts/GoatAddressBook.ts', prefixWithGeneratedWarning(''));
  jsExports.map((jsExport) => appendFileSync('./src/ts/GoatAddressBook.ts', `${jsExport}\n`));

  const solidityImports = imports.flatMap((f) => f.solidity);

  writeFileSync('./src/sol/GoatAddressBook.sol', prefixWithGeneratedWarning(prefixWithPragma('')));
  solidityImports.map((solExport) => appendFileSync('./src/sol/GoatAddressBook.sol', solExport));
}

main();
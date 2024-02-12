import { appendFileSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'fs';
import { prefixWithGeneratedWarning, prefixWithPragma } from './generator/utils';
import { generateNetworkAddresses } from './generator/networkGenerator';
import { arbitrumAddresses } from './configs/networks/arbitrum';

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

  const imports = [networkAddresses].flat();

  const jsExports = [...imports.map((f) => f.js).flat()];
  writeFileSync(`./src/ts/GoatAddressBook.ts`, prefixWithGeneratedWarning(''));
  jsExports.map((jsExport) => appendFileSync('./src/ts/GoatAddressBook.ts', `${jsExport}\n`));

  const solidityImports = imports.map((f) => f.solidity).flat();

  writeFileSync(`./src/GoatAddressBook.sol`, prefixWithGeneratedWarning(prefixWithPragma('')));
  solidityImports.map((solExport) => appendFileSync('./src/GoatAddressBook.sol', solExport));
}

main();
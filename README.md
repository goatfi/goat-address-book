# Goat Address Book 📒

This repository contains an up-to-date registry of all addresses of the Goat Protocol's smart contracts, for its usage in Solidity codebases.

## Usage with foundry

With Foundry installed and being in a Git repository:

```sh
forge install goatfi/goat-address-book
```

**Import core protocol addresses from a certain network:**

```sh
import { ProtocolArbitrum } from "goat-address-book/ProtocolArbitrum.sol";
```
## Usage with node

### Install

```sh
npm i @goatfi/goat-address-book
```

### Usage

```js
import * as pools from "@goatfi/goat-address-book";
import { ProtocolArbitrum } from "@goatfi/goat-address-book";

// all variables available on solidity version are available in javascript as well
console.log(ProtocolArbitrum.TREASURY);
```


### Production Recommendations

While there is a index import available in "GoatAddressBook.sol", we only recommend using it in tests.
Foundry currently does not eliminate unused code for [verification](https://github.com/foundry-rs/foundry/issues/2266).
This results in rather gigantic verifications when using the index file import from [GoatAddressBook.sol](./src/GoatAddressBook.sol).
For production code we therefore recommend to use specific libraries exported from `goat-address-book` like `ProtocolArbitrum` for the protocol addresses on Arbitrum.

### Credits
This repository was heavily inspired by [@bgd-lads](https://github.com/bgd-labs)'s [Aave Address Book](https://github.com/bgd-labs/aave-address-book) repository.
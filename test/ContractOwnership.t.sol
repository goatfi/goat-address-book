// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

import { Test } from "forge-std/Test.sol";
import { stdJson } from "forge-std/StdJson.sol";
import { console } from "forge-std/console.sol";
import { ProtocolArbitrum } from "../src/sol/ProtocolArbitrum.sol";

interface IVault {
    function owner() external view returns(address);
    function strategy() external view returns(address);
}

interface IStrategy {
    function owner() external view returns(address);
}

struct GoatChainData {
    string name;
    uint32 chainId;
    address[] vaults;
}

struct GoatData {
    mapping(uint32 => GoatChainData) chainVaults;
    uint8 chainsSize;
}

contract ContractOwnershipTest is Test {
    using stdJson for string;
    using ProtocolArbitrum for address;

    error InvalidOwner();

    /*//////////////////////////////////////////////////////////////////////////
                                  SET-UP FUNCTION
    //////////////////////////////////////////////////////////////////////////*/

    GoatData goatData;

    function setUp() public virtual {
        vm.createSelectFork(vm.envString("ARBITRUM_RPC_URL"));
        string memory root = vm.projectRoot();
        string memory vaultsPath = string.concat(root, "/src/json/GoatVaults.json");
        string memory vaultsJson = vm.readFile(vaultsPath);

        string memory chainName = vm.parseJsonString(vaultsJson, ".name");
        uint32 chainId = uint32(vm.parseJsonUint(vaultsJson, ".chainId"));
        address[] memory vaults = vm.parseJsonAddressArray(vaultsJson, ".vaults");

        GoatChainData memory goatVaults = GoatChainData(chainName, chainId, vaults);
        goatData.chainVaults[0] = goatVaults;
        goatData.chainsSize++;
    }

    function test_vaultOwnership() public { 
        uint32 invalidOwners;
        for (uint8 i = 0; i < goatData.chainsSize; i++) {
            IVault vault = IVault(goatData.chainVaults[i].vaults[0]);
            IStrategy strategy = IStrategy(vault.strategy());
            if(vault.owner() != ProtocolArbitrum.TIMELOCK){
                console.log( "\u001b[1;31m Vault owner not Timelock", address(vault), "\u001b[0m");
                invalidOwners++;
            }
            if(strategy.owner() != ProtocolArbitrum.TIMELOCK){
                console.log( "\u001b[1;31m Strateguy owner not Timelock", address(strategy), "\u001b[0m");
                invalidOwners++;
            }
        }
        assertEq(invalidOwners, 0);
    }
}
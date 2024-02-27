// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

import { Test } from "forge-std/Test.sol";
import { stdJson } from "forge-std/StdJson.sol";
import { console } from "forge-std/console.sol";
import { ProtocolArbitrum } from "../src/sol/ProtocolArbitrum.sol";

interface IOwnable {
    function owner() external view returns (address);
}

interface IVault is IOwnable {
    function strategy() external view returns (address);
}

struct GoatChainData {
    string name;
    uint32 chainId;
    address[] vaults;
    address timelock;
    address feeConfig;
    address bridgeAdapter;
    address rewardPool;
    address feeBatch;
}

struct GoatData {
    mapping(uint32 => GoatChainData) chainVaults;
    uint8 chainsSize;
}

contract ContractOwnershipTest is Test {
    using stdJson for string;

    uint32 invalidOwners;
    GoatData goatData;

    /*//////////////////////////////////////////////////////////////////////////
                                  SET-UP FUNCTION
    //////////////////////////////////////////////////////////////////////////*/

    function setUp() public virtual {
        vm.createSelectFork(vm.envString("ARBITRUM_RPC_URL"));
        string memory root = vm.projectRoot();
        string memory vaultsPath = string.concat(root, "/src/json/GoatVaults.json");
        string memory vaultsJson = vm.readFile(vaultsPath);

        string memory chainName = vm.parseJsonString(vaultsJson, ".name");
        uint32 chainId = uint32(vm.parseJsonUint(vaultsJson, ".chainId"));
        address[] memory vaults = vm.parseJsonAddressArray(vaultsJson, ".vaults");

        GoatChainData memory goatVaults = GoatChainData(
            chainName,
            chainId,
            vaults,
            ProtocolArbitrum.TIMELOCK,
            ProtocolArbitrum.FEE_CONFIG,
            ProtocolArbitrum.LAYERZERO_BRIDGE_ADAPTER,
            ProtocolArbitrum.GOAT_REWARD_POOL,
            ProtocolArbitrum.GOAT_FEE_BATCH
        );

        goatData.chainVaults[0] = goatVaults;
        goatData.chainsSize++;
    }

    function test_networkOwnership() public {
        invalidOwners = 0;
        for (uint8 i = 0; i < goatData.chainsSize; i++) {
            _checkOwner(ProtocolArbitrum.FEE_CONFIG);
            if (ProtocolArbitrum.LAYERZERO_BRIDGE_ADAPTER != address(0)) _checkOwner(ProtocolArbitrum.LAYERZERO_BRIDGE_ADAPTER);
            if (ProtocolArbitrum.GOAT_REWARD_POOL != address(0)) _checkOwner(ProtocolArbitrum.GOAT_REWARD_POOL);
            if (ProtocolArbitrum.GOAT_FEE_BATCH != address(0)) _checkOwner(ProtocolArbitrum.GOAT_FEE_BATCH);
        }
        assertEq(invalidOwners, 0);
        if(invalidOwners == 0) _printSuccess("All Protocol Contracts have the Timelock as owner");
    }

    function test_vaultOwnership() public {
        invalidOwners = 0;
        for (uint8 i = 0; i < goatData.chainsSize; i++) {
            for (uint16 j = 0; j < goatData.chainVaults[i].vaults.length; j++) {
                IVault vault = IVault(goatData.chainVaults[i].vaults[j]);
                _checkOwner(address(vault));
                _checkOwner(vault.strategy());
            }
        }
        
        assertEq(invalidOwners, 0);
        if(invalidOwners == 0) _printSuccess("All Vaults and strategies have the Timelock as owner");
    }

    function _checkOwner(address _target) private {
        if (IOwnable(_target).owner() != ProtocolArbitrum.TIMELOCK) {
            invalidOwners++;
            _printError(_target);
        }
    }

    function _printError(address _target) private view {
        console.log("\u001b[1;31m Owner not Timelock", _target, "\u001b[0m");
    }

    function _printSuccess(string memory _msg) private view {
        console.log("\u001b[1;32m", _msg, "\u001b[0m");
    }
}

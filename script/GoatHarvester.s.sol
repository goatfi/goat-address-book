// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { Script } from "forge-std/Script.sol";
import { stdJson } from "forge-std/StdJson.sol";
import { console } from "forge-std/console.sol";
import { ProtocolArbitrum, AssetsArbitrum } from "../src/sol/GoatAddressBook.sol";

interface IVault {
    function strategy() external view returns (address);
}

interface IStrategy {
    function harvest() external;
    function lastHarvest() external view returns (uint256);
}

interface IERC20 {
    function balanceOf(address) external view returns(uint256);
}

contract GoatHarvester is Script {

    address[] strategies = _getStrategies();
    uint256 minRevShareHarvestAmount = 0.002 ether;

    function run() public {
        uint privateKey = vm.envUint("HARVESTER_PK");

        vm.startBroadcast(privateKey);

        uint256 feeBatchBalance = _getFeeBatchBalance();
        if(feeBatchBalance >= minRevShareHarvestAmount){
            IStrategy(ProtocolArbitrum.GOAT_FEE_BATCH).harvest();
            console.log("FeeBatch Harvested:", feeBatchBalance);
        }
        
        for (uint i = 0; i < strategies.length; i++) {
            IStrategy strategy = IStrategy(strategies[i]);
            if(block.timestamp - strategy.lastHarvest() >= 24 hours){
                strategy.harvest();
                console.log("Harvested:", address(strategy));
            }
        }
        vm.stopBroadcast();
    }

    function _getStrategies() private view returns(address[] memory _strategies) {
        string memory root = vm.projectRoot();
        string memory vaultsPath = string.concat(root, "/src/json/GoatVaults.json");
        string memory vaultsJson = vm.readFile(vaultsPath);
        address[] memory vaults = vm.parseJsonAddressArray(vaultsJson, ".vaults");
        _strategies = new address[](vaults.length);
        for (uint i = 0; i < vaults.length; i++) {
            _strategies[i] = IVault(vaults[i]).strategy();
        }
    }

    function _getFeeBatchBalance() private view returns(uint256 feeBatchBalance) {
        feeBatchBalance = IERC20(AssetsArbitrum.WETH).balanceOf(ProtocolArbitrum.GOAT_FEE_BATCH);
    }
}
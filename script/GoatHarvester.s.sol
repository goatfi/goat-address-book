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
    function paused() external view returns (bool);
    function balanceOfPool() external view returns (uint256);
}

interface IERC20 {
    function balanceOf(address) external view returns(uint256);
}

contract GoatHarvester is Script {
    address[] strategies = _getStrategies();
    uint256 minRevShareHarvestAmount = 0.02 ether;

    function run() public {
        uint privateKey = vm.envUint("HARVESTER_PK");

        vm.startBroadcast(privateKey);
        
        for (uint i = 0; i < strategies.length; i++) {
            IStrategy strategy = IStrategy(strategies[i]);
            if(strategy.paused()) continue;
            if(_strategyHasBelowMinBalance(strategy)) continue;
            if(address(strategy) == 0xA79b2b1CC042CD21f317d11A2Eb7cb051599587e) continue;
            if(block.timestamp - strategy.lastHarvest() >= 11 hours){
                strategy.harvest();
                console.log("Harvested:", address(strategy));
            }
        }

        uint256 feeBatchBalance = _getFeeBatchBalance();
        if(feeBatchBalance >= minRevShareHarvestAmount){
            IStrategy(ProtocolArbitrum.GOAT_FEE_BATCH).harvest();
            console.log("FeeBatch Harvested:", feeBatchBalance);
        }
        vm.stopBroadcast();
    }

    function _strategyHasBelowMinBalance(IStrategy _strategy) private view returns(bool) {
        uint256 balance = _strategy.balanceOfPool();
        if(balance < 0.01 ether && balance > 0.00001 ether){ //Need to improve with external tvl data
            console.log("Below min balance:", address(_strategy));
            return true;
        }
        return false;
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

    function _getGasPrice() private view returns (uint256 gas) {
        string memory root = vm.projectRoot();
        string memory gasPath = string.concat(root, "/gas-price");

        gas = vm.parseUint(vm.readFile(gasPath));
    }
}
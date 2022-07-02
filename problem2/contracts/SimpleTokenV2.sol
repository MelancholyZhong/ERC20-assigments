// SPDX-License-Identifier:MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract SimpleTokenV2 is ERC20Upgradeable {
    function initialize(uint256 initialSupply) public initializer {
        __ERC20_init("SimpleToken", "STII");
        _mint(msg.sender, initialSupply);
    }
}

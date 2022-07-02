// SPDX-License-Identifier:MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract SimpleToken is ERC20Upgradeable {
    function initialize(uint256 initialSupply) public initializer {
        __ERC20_init("SimpleToken", "ST");
        _mint(msg.sender, initialSupply);
    }
}

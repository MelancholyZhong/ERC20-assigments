//SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SimonToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("SimonToken", "ST") {
        _mint(msg.sender, initialSupply);
    }

    function mint(address account, uint256 amount) public returns (bool) {
        require(amount <= 100e18, "Mint amount exceeded");
        _mint(account, amount);
        return true;
    }
}

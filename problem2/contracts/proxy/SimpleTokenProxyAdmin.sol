// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol";

contract SimpleTokenProxyAdmin is ProxyAdmin {
    constructor(
        address /*owener*/
    ) ProxyAdmin() {}
}

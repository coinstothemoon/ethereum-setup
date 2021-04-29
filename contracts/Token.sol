// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor() ERC20("Hello World Token", "HWT") {
        // 1 Billion Supply
        _mint(msg.sender, 1000000000e18);
    }
}
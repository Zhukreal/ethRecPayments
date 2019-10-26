pragma solidity 0.4.24;

import "./WinTokensVesting.sol";

contract TeamAndEarlyInvestorsVesting is WinTokensVesting {
    constructor(ERC20TokenInterface token, address withdraw) WinTokensVesting(token, withdraw) public {}
}

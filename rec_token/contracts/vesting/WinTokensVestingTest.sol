pragma solidity 0.4.24;

import "./WinTokensVesting.sol";

/**
 * Testing version of WinTokenVesting contract with ability to manupulate vesting start timestamp on deploy.
 */
contract WinTokensVestingTest is WinTokensVesting {
    /**
     * vestingStart parameter is added here only for testing purposes. In live contracts timestamp will be immutable.
     */
    constructor(ERC20TokenInterface token, address withdraw, uint256 vestingStart) WinTokensVesting(token, withdraw) public {
        vestingStartTimestamp = vestingStart;
        initVestingStages();
    }
}

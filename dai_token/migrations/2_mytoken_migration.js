const Mytoken = artifacts.require("Mytoken");

module.exports = function(deployer) {
    deployer.deploy(Mytoken);
};

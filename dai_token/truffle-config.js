var HDWalletProvider = require("@truffle/hdwallet-provider");

var mnemonic =
    "iron rally flee cricket hope sign shock salmon dizzy height wheat loyal";

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        mainnet: {
            provider: new HDWalletProvider(
                mnemonic,
                "https://kovan.infura.io/v3/b4b6f814d47c42a68b3afb0d4ccd27d2"
            ),
            network_id: 42
        },
        development: {
            host: "127.0.0.1",
            port: 9545,
            network_id: "8" // Match any network id
        },
        ropsten: {
            provider: new HDWalletProvider(
                mnemonic,
                "https://ropsten.infura.io/v3/b4b6f814d47c42a68b3afb0d4ccd27d2"
            ),
            network_id: 3
        },
        kovan: {
            provider: new HDWalletProvider(
                mnemonic,
                "https://kovan.infura.io/v3/b4b6f814d47c42a68b3afb0d4ccd27d2"
            ),
            network_id: 42
        },
        rinkeby: {
            //provider: new HDWalletProvider(mnemonic2, "https://kovan.infura.io/"+infura_apikey),
            network_id: 4
        }
    }
};

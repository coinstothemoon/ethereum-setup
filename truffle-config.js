require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
    networks: {
        development: {
            host        : '127.0.0.1',
            port        : 8545,
            network_id  : '*'
        },

        rinkeby: {
            provider: function() {
                return new HDWalletProvider({
                    mnemonic: process.env.MNEMONIC,
                    providerOrUrl: 'https://rinkeby.infura.io/v3/' + process.env.INFURA_PROJECT_ID,
                    chainId: 4,
                });
            },
            network_id: 4,
            skipDryRun: true
        },

        mainnet: {
            provider: function() {
                return new HDWalletProvider({
                    mnemonic: process.env.MNEMONIC,
                    providerOrUrl: 'https://mainnet.infura.io/v3/' + process.env.INFURA_PROJECT_ID
                });
            },
            network_id : '1'
        }
    },

    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

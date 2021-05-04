require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remember arrow hope clinic tail gauge'; 
let testAccounts = [
"0x3b82b2e529920e1798c53945a51ade4175e9f23ad15942239231931cfd95f316",
"0xa313fc90f8b537d38f98ad40b21072f1801c04bb91d1563212f10d999d5f107e",
"0x6e38ad0444497872975f88bb1858fb6dac00bd05f6ad34a8e89865503e6a1f28",
"0x0c5639969acf87196883824e23b472b30ecc5bff45aa98e907b9278e09e4c4b4",
"0x2dbea9ca475e9f3a3595d7c4172bacbff7618d3d663a170e34c72a8e6f6c344b",
"0x33ad962356d8c0ada9d7cf14b732c4a28fe5f93e7e6d06079ec05142dfd5911f",
"0xe48776b72cf98bb2e6d33d111c471d48889dd07438d5da726bfd04c10dd7f62e",
"0x5a1d25d4472abaad1180ca8a4d0c58ad2dd3e8cc2a18d23f7642ed6e85d5669f",
"0xe47ac458bc1bf9cbce4be64cfde360e126cbfcbd30e5daaa23ddc494ac61e24b",
"0x8b4cad35a9bbccd6346257d7a95026e85eff8551b8430cd59dd893613ec07ddf"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

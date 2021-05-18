require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone foot fire reflect stereo evil hunt sister army genre'; 
let testAccounts = [
"0xf0a9b0578d0c427eaeec338962da82911e144a2d386bca31580b8bd294eb8085",
"0x0d7850f21989e81d444871ab877655ed10b3af87b18bbbb3cffdfcd958e56ca0",
"0x39b5ccaac5138c1182b087b36767501a7cb9c8c1c1a5103fa9185663b45eb94b",
"0xb5f2fb49d72d174d0474d0cd84ea83b76e9f109c60b664a055e9e33eb585d9b2",
"0x9dc980312be28d43c9c009bc4eb0e34f3dff8ddf224bc04515734d83511e4500",
"0xccc2cc51a8831eee2e0cdc3bb647877943a958ec2e187875785d08ed9e8df1f3",
"0xd1de58965c86076914315d4036be46821a621ce5001fa83e5f1c6308c5621f6a",
"0x16a50dbe63b0216bc353a33b944977a04ced7bbe275daca5eada8f3a2e584f90",
"0xedb9489a1c0b75a9d2f7f2bac8a897e4c5a32dce18d932b98dcef5af93c09ae2",
"0xa76f4770b30904099f214adbd0a5fadcfa6d58ff57b65fa6c93f48495688da7d"
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

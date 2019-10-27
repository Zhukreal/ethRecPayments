'use strict';
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(process.env.PROVIDER_URL));
const abi = require('./abi');


const contractAddr = process.env.CONTRACT_ADDR;


async function startCharging() {
    const recBillingContract = new web3.eth.Contract(abi, contractAddr);
    const billingId = 733674;
    while (true) {
        const result = await web3.eth.sendSignedTransaction((await web3.eth.accounts.signTransaction({
            to: contractAddr,
            data: recBillingContract.methods.charge(billingId).encodeABI(),
            gas: 6000000
        }, process.env.PRIVATE_KEY)).rawTransaction );
        console.log('result', result);

        await new Promise(resolve => setTimeout(() => resolve(), 300000));
    }
}

startCharging();
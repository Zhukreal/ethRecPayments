import React, { useState, useEffect } from 'react';
import logo from '../images/cryptoadop.jpg'
// import Web3 from 'web3';
import withWeb3 from './../utils/withWeb3';
import {ADRESS, SMART} from './../utils/static';
import {Route, Switch} from 'react-router-dom'
import history from "../history";

const Admin = function  ({web3, contract}) {
    let [account, setAccount] = useState('')
    let [radio, setRadio] = useState(1)
    let [check1, setCheck1] = useState(false)
    let [check2, setCheck2] = useState(false)
    let [check3, setCheck3] = useState(false)
    let [whereGet, setWhereGet] = useState(ADRESS)
    let [smart, setSmart] = useState('0x35aDcF84f44A7348889fF8445aFD164723837b3b')
    let [loading, setLoading] = useState(false)
    let [hash, setHash] = useState(null)

    console.log('web3', web3)
    console.log('contract', contract)


    useEffect(() =>  {
        getAccount()
    }, []);

    const getAccount = async () => {
        window.ethereum.enable().then((account) =>{
            const defaultAccount = account[0]
            // web3js.eth.defaultAccount = defaultAccount
            console.log(defaultAccount)
            setAccount(defaultAccount);
        })
    }

    const send = async () => {
        setLoading(true)
        try {
            let res = await contract.methods.registerNewMerchant(whereGet, smart).send({from: account})
            setHash(res.transactionHash)
            debugger
            setTimeout(() => {
                history.push('/list_payments')
            }, 1000)
        } catch (e) {
            console.log(e);
            setLoading(false)
        }
    }


    return (
        <>
            <div className="z-header">
                <img className="z-logo z-logo-2" src={logo} alt=""/>
                <div className="z-metamask">
                    <span className="z-green"></span>
                    <span>MetaMask enabled</span>
                </div>
            </div>
            <div className="z-content">
                <div className="z-title">Hi Netflix,</div>
                <div className="z-admin-subtitle">
                    We are happy to provide you decentralized recurring payment solution for ethereum cryptocurrencies.
                    <br/>
                    Please do next steps:
                </div>
                <div className="z-form">
                    <div className="z-label">Please choose ethereum cryptocurrency:</div>
                    <form>
                        <div className="z-radio">
                            <label>
                                <input type="checkbox" onChange={() => setCheck1(!check1)} checked={check1} />
                                DAI
                            </label>
                        </div>
                        <div className="z-radio">
                            <label>
                                <input type="checkbox" onChange={() => setCheck2(!check2)} checked={check2} />
                                Gemini Dollar
                            </label>
                        </div>
                        <div className="z-radio">
                            <label>
                                <input type="checkbox" onChange={() => setCheck3(!check3)} checked={check3} />
                                Circle USD
                            </label>
                        </div>
                    </form>
                    {/*<input type="text" className="z-input"/>*/}
                    <div className="z-label">Please enter ethereum address on what you want to get recurring payments:</div>
                    <input type="text" onChange={e => setWhereGet(e.target.value)} value={whereGet} className="z-input"/>
                    {/*<button className="z-btn z-btn-submit" onClick={send} disabled={loading}>Submit</button>*/}

                    <div className="z-label">Please enter ethereum address that will communicate with Ethereum recurring billing smart contract:</div>
                    <input type="text" onChange={e => setSmart(e.target.value)} value={smart}  className="z-input"/>

                    <div>
                        <button className="z-btn z-btn-submit" onClick={send} disabled={loading}>Submit</button>
                    </div>

                    {hash && <a className='z-link' target='_blank' href={`https://ropsten.etherscan.io/tx/${hash}`}>https://ropsten.etherscan.io/tx/{hash}</a> }


                </div>

            </div>
        </>
    );
}

export default withWeb3(Admin);
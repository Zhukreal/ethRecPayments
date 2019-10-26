import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png'
import vm from '../images/vm.png'
import ethI from '../images/ethereum-icon.png'
import no from '../images/no.png'
import noA from '../images/noA.png'
import yes from '../images/yes.png'
import yesA from '../images/yesA.png'
import withWeb3 from "../utils/withWeb3";
import {ADRESS, SMART, SMART20} from './../utils/static';
import {abi} from "../utils/abi";
import {abi20} from "../utils/abi20";


const MainPage = function  ({web3, contract}) {
    const [active, setActive] = useState(2);
    const [active2, setActive2] = useState(0);
    let [account, setAccount] = useState('')
    let [loading, setLoading] = useState(false)
    let [hash, setHash] = useState(null)

    function scrollTo(element) {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop
        });
    }

    console.log('web3', web3)
    console.log('contract', contract)

    useEffect(() =>  {
        getAccount()
    }, []);

    const getAccount = async () => {
        window.ethereum.enable().then((account) =>{
            const defaultAccount = account[0]
            console.log(defaultAccount)
            setAccount(defaultAccount);
        })
    }

    const onPay = async () => {
        setLoading(true)
        try {
            let bId = Math.floor(100000 + Math.random() * 900000)
            let mId = 2
            let value = 10
            let period = 300

            // bId = bId + ''
            console.log(bId)
            console.log(mId)
            console.log(value)
            console.log(period)

            // const contract20 = await new web3.eth.Contract(abi20, SMART20);
            // let res1 = await contract20.methods.approve(contract.options.address, value).send({from: account})
            // console.log(res1)
            let res = await contract.methods.allowRecurringBilling(bId, mId, value, period ).send({from: account})

            console.log(res)


            setHash(res.transactionHash)
            scrollTo(document.getElementById("congrat-message"));

        } catch (e) {
            console.log(e);
            setLoading(false)
        }
    }

    const onContinue = () => {
        scrollTo(document.getElementById("z-your-choise"));
    }

    return (
        <>
            <div className="z-header">
                <img className="z-logo" src={logo} alt=""/>
            </div>
            <div className="z-content">
                <div className="z-title"> Choose the plan that’s right for you</div>
                <div className="z-subtitle">Downgrade or upgrade at any time</div>
                <div className="z-row-cards">
                    <div className={`z-card ${active === 1 ? 'active' : ''}`} onClick={() => setActive(1)}>Basic</div>
                    <div className={`z-card ${active === 2 ? 'active' : ''}`} onClick={() => setActive(2)}>Standart</div>
                    <div className={`z-card ${active === 3 ? 'active' : ''}`} onClick={() => setActive(3)}>Premium</div>
                </div>
                <div className="z-table">
                    <div className="z-table-row">
                        <div className="z-item-1">Monthly price after free month ends on 11/24/19</div>
                        <div className={`z-item-2 ${active === 1 ? 'active' : ''}`} >7.99 $</div>
                        <div className={`z-item-3 ${active === 2 ? 'active' : ''}`}>9.99 $</div>
                        <div className={`z-item-4 ${active === 3 ? 'active' : ''}`}>11.99 $</div>
                    </div>
                    <div className="z-table-row">
                        <div className="z-item-1">HD available</div>
                        <div className="z-item-2">
                            <img src={active === 1 ? noA : no} alt=""/>
                        </div>
                        <div className="z-item-3">
                            <img src={active === 2 ? yesA : yes} alt=""/>
                        </div>
                        <div className="z-item-4">
                            <img src={active === 3 ? yesA : yes} alt=""/>
                        </div>
                    </div>
                    <div className="z-table-row">
                        <div className="z-item-1">Ultra HD available</div>
                        <div className="z-item-2">
                            <img src={active === 1 ? noA : no} alt=""/>
                        </div>
                        <div className="z-item-3">
                            <img src={active === 2 ? noA : no} alt=""/>
                        </div>
                        <div className="z-item-4">
                            <img src={active === 3 ? yesA : yes} alt=""/>
                        </div>
                    </div>
                    <div className="z-table-row">
                        <div className="z-item-1">Screens you can watch on at the same time</div>
                        <div className={`z-item-2 ${active === 1 ? 'active' : ''}`} >1</div>
                        <div className={`z-item-3 ${active === 2 ? 'active' : ''}`}>2</div>
                        <div className={`z-item-4 ${active === 3 ? 'active' : ''}`}>4</div>
                    </div>
                    {/*<div className="z-table-row">*/}
                    {/*    <div className="z-item-1">Watch on your laptop, TV, phone and tablet</div>*/}
                    {/*    <div className="z-item-2">*/}
                    {/*        <img src={active === 1 ? yesA : yes} alt=""/>*/}
                    {/*    </div>*/}
                    {/*    <div className="z-item-3">*/}
                    {/*        <img src={active === 2 ? yesA : yes} alt=""/>*/}
                    {/*    </div>*/}
                    {/*    <div className="z-item-4">*/}
                    {/*        <img src={active === 3 ? yesA : yes} alt=""/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="z-table-row">
                        <div className="z-item-1">Unlimited movies and TV shows</div>
                        <div className="z-item-2">
                            <img src={active === 1 ? yesA : yes} alt=""/>
                        </div>
                        <div className="z-item-3">
                            <img src={active === 2 ? yesA : yes} alt=""/>
                        </div>
                        <div className="z-item-4">
                            <img src={active === 3 ? yesA : yes} alt=""/>
                        </div>
                    </div>
                    <div className="z-table-row">
                        <div className="z-item-1">Cancel anytime</div>
                        <div className="z-item-2">
                            <img src={active === 1 ? yesA : yes} alt=""/>
                        </div>
                        <div className="z-item-3">
                            <img src={active === 2 ? yesA : yes} alt=""/>
                        </div>
                        <div className="z-item-4">
                            <img src={active === 3 ? yesA : yes} alt=""/>
                        </div>
                    </div>
                    {/*<div className="z-table-row">*/}
                    {/*    <div className="z-item-1">First month free</div>*/}
                    {/*    <div className="z-item-2">*/}
                    {/*        <img src={active === 1 ? yesA : yes} alt=""/>*/}
                    {/*    </div>*/}
                    {/*    <div className="z-item-3">*/}
                    {/*        <img src={active === 2 ? yesA : yes} alt=""/>*/}
                    {/*    </div>*/}
                    {/*    <div className="z-item-4">*/}
                    {/*        <img src={active === 3 ? yesA : yes} alt=""/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div className="z-subtext">
                    HD and Ultra HD availability subject to your Internet service and device capabilities. Not all content available in HD or Ultra HD. See Terms of Use for more details.
                </div>

                <div className='text-center'>
                    <button className="z-btn" onClick={onContinue}>CONTINUE</button>
                </div>
            </div>


            <div id="z-your-choise">
                <div className="z-content">
                    <div className="z-title text-center">Choose the payment method</div>
                    <div className="methods-wrap">
                        <div className={`methods-item ${active2 === 1 ? 'active' : '' }`} onClick={() => setActive2(1)} >
                            <img src={vm} alt=""/>
                        </div>
                        <div className={`methods-item ${active2 === 2 ? 'active' : '' }`} onClick={() => setActive2(2)}>
                            <img className={'eth-icon'} src={ethI} alt=""/>
                        </div>
                    </div>

                    {active2 === 2 &&
                        <>
                            <div className="z-billing-card">
                                <div className="cart-title">Payment info</div>
                                <div className="card-row">
                                    <div className="card-row-left">Currency</div>
                                    <div className="card-row-right">
                                        <select className='z-select' name="" id="">
                                            <option value="DAI">DAI</option>
                                            <option value="Gemini Dollar">Gemini Dollar</option>
                                            <option value="Circle USD">Circle USD</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="card-row">
                                    <div className="card-row-left">Plan</div>
                                    <div className="card-row-right">5 min</div>
                                </div>
                                <div className="card-row">
                                    <div className="card-row-left">Amount</div>
                                    <div className="card-row-right">
                                        {active === 1 && '7.99 $'}
                                        {active === 2 && '9.99 $'}
                                        {active === 3 && '11.99 $'}
                                    </div>
                                </div>
                                <div className="card-link">
                                    <a className='z-link' target='_blank' href={`https://ropsten.etherscan.io/address/0x1984a9ccb483e1e45c08dc095fd123e64022a6a5`}>View</a> reccuring billing smart contract
                                </div>

                                <button className="z-btn z-btn-footer" onClick={onPay} disabled={loading}>Pay</button>
                                {hash && <a className='z-link' target='_blank' href={`https://ropsten.etherscan.io/tx/${hash}`}>https://ropsten.etherscan.io/tx/{hash}</a> }

                            </div>
                        </>
                    }

                </div>
            </div>

            <div id="congrat-message">
                {hash &&
                <div className="z-content">
                    <div className="congrat-message">
                        Thank you! <br/>
                        Your payment was succeful. <br/>
                        <span>Enjoy Netfix...</span>
                    </div>
                </div>
                }
            </div>

        </>
    );
}

export default withWeb3(MainPage);
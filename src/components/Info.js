import React, { useState, useEffect, useRef } from 'react';
import logo from '../images/cryptoadop.jpg'
// import Web3 from 'web3';
import withWeb3 from './../utils/withWeb3';
import {ADRESS, SMART} from './../utils/static';
import moment from 'moment'


const Info = function  ({web3, contract}) {
    let [account, setAccount] = useState('')
    let [list, setList] = useState([])
    let [loading, setLoading] = useState(true)


    let kef = 0;

    useEffect(() =>  {
        getInfo()
        // setInterval(() => {
        //     getInfo()
        //     setLoading(false)
        // }, 5000)
    }, []);

    const getInfo = () => {
        // let item = {
        //     id: kef,
        //     address: '0xbA905C35f9711e7466B86e40DCc8713798C62732',
        //     timestamp: new Date().getTime() + kef*300000
        // }
        // setList(list => list.concat(item));
        // ++kef


        // list.push(item)


        // setList(list)

        try {
            window.ethereum.enable().then( async (account) =>{
                const defaultAccount = account[0]
                setAccount(defaultAccount);

                // let res = await contract.methods.allowRecurringBilling(bId, mId, value, period ).send({from: account})
                let res =await contract.getPastEvents('BillingCharged', {
                    filter: {},
                    fromBlock: 0,
                    toBlock: 'latest'
                })
                setLoading(false)
                setList(res)

            })
        } catch (e) {
            setLoading(false)
        }

    }

    console.log(list)

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
                <div className="z-title">Your payments:</div>
                {loading ?
                    <div style={{marginTop: '50px'}}>Loading...</div>
                    :
                    <div className="table-wrapper">
                        <table>
                            <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Plan</th>
                                <th>Currency</th>
                                <th>Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                                {list.map((item, key) => {
                                    // let returnValues = item.returnValues || {}
                                    // let date1 = new Date()
                                    // let date2 = new Date()

                                    // if(returnValues.timestamp) {
                                    //     date1 = moment(returnValues.timestamp * 1000).format('DD.MM.YYYY, h:mm a');
                                    // }
                                    // if(returnValues.nextChargeTimestamp) {
                                    //     date2 = moment(returnValues.nextChargeTimestamp * 1000).format('DD.MM.YYYY, h:mm a');
                                    // }

                                    // debugger
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.address}</td>
                                            <td>{moment(item.timestamp).format('DD.MM.YYYY, h:mm a')}</td>
                                            <td>5 min</td>
                                            <td>DAI</td>
                                            <td>9.99</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </>
    );
}

export default withWeb3(Info);
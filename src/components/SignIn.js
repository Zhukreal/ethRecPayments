import React, { useState, useEffect } from 'react';
import logo from '../images/cryptoadop.jpg'

import history from "./../history";

const SignIn = function  () {
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let [loading, setLoading] = useState(false)


    const login =  () => {
        setLoading(true)
        setTimeout(() => {
            history.push('/netflix')
        }, 1000)
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
                <div className="login-wrap">
                    <div className="z-label">Username</div>
                    <input type="text" onChange={e => setUsername(e.target.value)} value={username} className="z-input"/>
                    <div className="z-label">Password</div>
                    <input type="password" onChange={e => setPassword(e.target.value)} value={password} className="z-input"/>
                    <button className="z-btn z-btn-login" disabled={!username || !password || loading} onClick={login}>Sign In</button>
                </div>
            </div>
        </>
    );
}

export default SignIn;
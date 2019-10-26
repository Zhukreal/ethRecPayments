import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'


import MainPage from './components/MainPage'
import Admin from './components/Admin'
import Info from './components/Info'
import SignIn from './components/SignIn'
import Payment from './components/Payment'


const Routes = (props) => {
    return (
        <Switch>
            <Route path={'/'} exact render={() => <Payment /> } />
            <Route path={'/payment'} render={() => <MainPage /> } />
            <Route path={'/netflix'} render={() => <Admin /> } />
            <Route path={'/list_payments'} render={() => <Info /> } />
            <Route path={'/sign_in'} render={() => <SignIn /> } />
        </Switch>
    )
};

export default Routes;



import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'


import MainPage from './components/MainPage'
import Admin from './components/Admin'
import Info from './components/Info'


const Routes = (props) => {
    return (
        <Switch>
            <Route path={'/'} exact render={() => <MainPage /> } />
            <Route path={'/admin'} exact render={() => <Admin /> } />
            <Route path={'/info'} exact render={() => <Info /> } />
        </Switch>
    )
};

export default Routes;



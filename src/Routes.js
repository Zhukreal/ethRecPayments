import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'


import MainPage from './components/MainPage'


const Routes = (props) => {
    return (
        <Switch>
            <Route path={'/'} exact render={() => <MainPage /> } />
        </Switch>
    )
};

export default Routes;



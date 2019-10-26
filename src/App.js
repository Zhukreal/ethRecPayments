import React, {Component} from 'react'
import {withRouter} from "react-router"
import axios from "axios";

import {Context} from "./Context";
import Routes from './Routes'

import './App.sass'
import './styles/notification.css'
import './libs/grid/grid.css'
import "font-awesome/css/font-awesome.min.css";

import {NotificationContainer} from 'react-notifications';

axios.defaults.timeout = 3000000;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openedMenu: false
        };
    }

    componentDidMount() {

    }


    handleToggleMenu = () => {
        this.setState({openedMenu: !this.state.openedMenu})
    }



    render() {

        return (
            <div className={`App`}>
                <div className='content-wrapper'>
                    <Routes />
                </div>

                <NotificationContainer />
            </div>
        );
    }
}


App.contextType = Context;
export default Object.assign(withRouter(App), {contextType: undefined});

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'

import App from './App'
import { Provider } from './Context';
import history from './history';

// const createHistory = require('history').createBrowserHistory
//
// const history = createHistory();


ReactDOM.render(
  <Router history={history}>
      <Provider>
          <App history={history}/>
      </Provider>
  </Router>,
document.getElementById('root'));


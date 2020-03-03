import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from 'app/';
import store from  './store'
import { Provider } from 'react-redux';

import img from 'common/images/react.png'
import s from './style.module.less'

const Root = () => (
  <div className={`root ${s.root}`}>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  </div>
);

export { Root }

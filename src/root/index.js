import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from 'app/';
import store from  './store'
import { Provider } from 'react-redux';

import img from 'common/images/react.png'
import s from './style.module.less'

import FontTest from 'setup-check/font-test/';

const Root = () => (
  <div className={`root ${s.root}`}>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
    {/* <div className={`image-container ${s.imageContainer}`}><img src={img} /></div> */}
    {/* <FontTest /> */}
  </div>
);

export default Root

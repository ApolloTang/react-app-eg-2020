import React, {Component} from 'react'
import SimpleNavigation from 'components/core/simple-navigation';

import {
  Routes,
  navigationDirective
} from './routes'

import style from './style.module.less'

console.log('routes: ', Routes)
const App = () =>(
  <div className={`app ${style['module-style']}`} >
    <div className="app-navigation-container">
      <SimpleNavigation navigations={navigationDirective}/>
    </div>
    <div className="app-workspace">
      <Routes />
    </div>
  </div>
)

export default App

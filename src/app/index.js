import React, {Component} from 'react'
import SimpleNavigation from 'common/components/core/simple-navigation';

import {
  Routes,
  navigationDirective
} from './routes'

import s from './style.module.less'

const App = () =>(
  <div className={`app ${s.moduleStyle}`} >
    <div className="app-navigation-container">
      <SimpleNavigation navigations={navigationDirective}/>
    </div>
    <div className="app-workspace">
      <Routes />
    </div>
  </div>
)

export default App

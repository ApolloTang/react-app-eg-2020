import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'

import {
  Home,
  PageA,
  PageNoMatch
} from 'pages/'

import { Users } from 'pages/users/'


const navigationDirective = [
  {to:'/', displayText:'Home'},
  {to:'/a', displayText:'PageA'},
  {to:'/users', displayText:'Users'},
  {to:'/no-match', displayText:'no-match'},
]


const Routes = () => (
  <Switch>
    <Route exact path="/"  component={Home} />
    <Route exact path="/a"><PageA /></Route>
    <Route path="/users"><Users /></Route>
    <Route><PageNoMatch /></Route>
  </Switch>
);

export { Routes, navigationDirective }

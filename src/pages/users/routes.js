import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'

import {
  PageNoMatch
} from 'pages/'


import {
  UserView
} from 'pages/users/containers/user-view/'

const Routes = () => (
  <Switch>
    <Route exact path="/users/" component={()=><div>LandingWorkspace</div>} />
    <Route exact path="/users/new" component={()=><div>user new</div>} />
    <Route exact path="/users/:userId" ><UserView /></Route>
    <Route exact path="/users/:userId/edit" component={()=><div>edit user</div>} />
    <Route><PageNoMatch /></Route>
  </Switch>
);

export { Routes }

import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'

import {
  PageNoMatch
} from 'pages/'


const Routes = () => (
  <Switch>
    <Route exact path="/users/" component={()=><div>LandingWorkspace</div>} />
    <Route exact path="/users/new" component={()=><div>user new</div>} />
    <Route><PageNoMatch /></Route>
  </Switch>
);

export { Routes }

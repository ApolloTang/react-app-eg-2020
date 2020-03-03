import React from 'react'
import {connect} from 'react-redux'
import { withRouter, useRouteMatch } from 'react-router-dom'


import SimpleNavigation from 'common/components/core/simple-navigation'

import s from  './style.module.less'

const UsersWorkspaceControl_unconnected =
  ({currentUserId}) => {
    let navigationDirective = []

    if (currentUserId ==='new') {
      navigationDirective = [
        {to:'/users/new', displayText:'Add User'},
      ]
    } else if (!currentUserId) {
     navigationDirective = [
      {to:'/users/new', displayText:'Add User'},
      {to:`/users/${currentUserId}/edit`, displayText:'Edit User'},
    ] }

    return(
      <div className={`function-navigation ${s.moduleStyle}`}>
        <SimpleNavigation navigations={navigationDirective}/>
      </div>
    )
  }

const UsersWorkspaceControl = UsersWorkspaceControl_unconnected
export { UsersWorkspaceControl }

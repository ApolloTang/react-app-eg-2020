import React from 'react'
import SimpleNavigation from 'common/components/core/simple-navigation'

import s from  './style.module.less'

const UsersWorkspaceControl =
  ({currentUserId}) => {
    let navigationDirective = []

    if (currentUserId ==='new' || currentUserId === null) {
      navigationDirective = [
        {to:'/users/new', displayText:'Add User'},
      ]
    } else if (currentUserId) {
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

export { UsersWorkspaceControl }

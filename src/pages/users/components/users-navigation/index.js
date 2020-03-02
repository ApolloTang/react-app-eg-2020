import React from 'react'
import { withRouter } from 'react-router-dom'


import SimpleNavigation from 'common/components/core/simple-navigation'

import s from  './style.module.less'

const Component = (props) => {

  const id_selectedUser = props.match.params//.userId

  let navigationDirective = [
    {to:'/users/new', displayText:'Add User'},
    {to:`/users/${id_selectedUser}/edit`, displayText:'Edit User'},
  ]

  const url = props.match.url
  const isCreate = /^\/users\/new\/?$/i.test(url)
  const noUser = /^\/users\/?$/i.test(url)

  // if (isCreate || noUser) {
  //   navigationDirective = [
  //     {to:'/users/new', displayText:'Add User'},
  //   ]
  // }

  return(
    <div className={`function-navigation ${s.moduleStyle}`}>
      <SimpleNavigation navigations={navigationDirective}/>
    </div>
  )
}

const UsersNavigation = withRouter(Component)
export { UsersNavigation }

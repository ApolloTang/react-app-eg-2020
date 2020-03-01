import React  from 'react'
import {UsersPageLayout}  from './components/layout/'
import {UsersNavigation}  from './components/users-navigation/'
import {UsersCatelogue}  from './containers/users-catelogue/'
import { Routes }  from './routes'


const Page = props => {
  return (
    <>
      <UsersPageLayout
        UsersCatelog={<UsersCatelogue/>}
        Navigation={<UsersNavigation/>}
        Workspace={<Routes/>}
      />
    </>
  )
}

export { Page as Users }


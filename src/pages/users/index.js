import React  from 'react'
import {UsersPageLayout}  from './components/layout/'
import {UsersNavigation}  from './components/users-navigation/'
import { Routes }  from './routes'


const Page = props => {
  return (
    <>
      <UsersPageLayout
        UserCatelog={<div>userCat</div>}
        Navigation={<UsersNavigation/>}
        Workspace={<Routes/>}
      />
    </>
  )
}

export { Page as Users }


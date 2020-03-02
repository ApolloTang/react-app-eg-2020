import { combineReducers } from 'redux'


import { resources } from  'app/resources/reducer'
import { usersPage } from  'pages/users/containers/reducer'

const pages = combineReducers({
  usersPage,
})

const rootReducer = combineReducers({
  resources,
  usersPage
})


export { rootReducer }

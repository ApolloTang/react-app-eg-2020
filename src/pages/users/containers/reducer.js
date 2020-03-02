import { combineReducers } from 'redux';

import { usersPage_userCatelogue } from './users-catelogue/reducer';
import { usersPage_users } from './user-view/reducer';

const reducers = combineReducers({
  userCatelogue: usersPage_userCatelogue,
  ui: usersPage_users
})


export  { reducers as usersPage };

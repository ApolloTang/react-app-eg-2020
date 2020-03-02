import { combineReducers } from 'redux';

import { usersPage_userCatelogue } from './users-catelogue/reducer';

const reducers = combineReducers({
  userCatelogue: usersPage_userCatelogue,
})


export  { reducers as usersPage };

import { combineReducers } from 'redux';

import { resouces_userCatelogue } from './users-catelogue/reducer';

const reducers = combineReducers({
  userCatelogue: resouces_userCatelogue,
})


export  { reducers as resources };

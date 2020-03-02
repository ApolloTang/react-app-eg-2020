import _ from 'lodash';
import { actionNames } from 'root/action-names'

import {array_to_IndexirizedObj} from 'util/helper.js';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case  actionNames.resources_userCatelog_update : {
      const payload = action.payload
      const userCat_prev = state.userCat_prev;
      const userCat_next = {
        ...state.userCat_prev,
        ...array_to_IndexirizedObj(payload.userCatelog)
      }
      return userCat_next;
    }
    case actionNames.resources_userCatelog_delete : {
      const payload = action.payload

      let id_deletedUser;
      if (payload.hasOwnProperty('deletedUser')) {
        // payload receive a single user object
        id_deletedUser = payload.deletedUser._id;
        console.log('xxxx id_deletedUser: ', id_deletedUser)
      }
      if (payload.hasOwnProperty('deletedUsers')) {
        // payload receive a collection of users object in array
        // ... not implimented
      }

      console.log('state; ', state);
      const users_next = _.cloneDeep(state.users);
      delete users_next[id_deletedUser]
      return users_next;
    }
    default: {
      return state;
    }
  }
}


export { reducer as resouces_userCatelogue };

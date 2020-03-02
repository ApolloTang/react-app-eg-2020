import { API } from 'app/resources/users/services'
import { actionNames } from 'root/action-names'

const actions = {

  init() {
    return (dispatch, getState) => {
      dispatch({
        type: actionNames.usersPage_userView_init,
      });
    }
  },

  fetchUser(userId) {
    return (dispatch, getState) => {
      dispatch({
        type: actionNames.usersPage_userView_fetch_begin
      });
      return API.users.getOne(userId).then(
        user=>{
          const worker_apiUserGetOne = function worker_apiUserGetOne(user) {
            dispatch({
              type: actionNames.usersPage_userView_fetch_success,
              payload: {user}
            });
            return user;
          }
          worker_apiUserGetOne(user);
        },
        (err)=>{
          dispatch({
            type: actionNames.usersPage_userView_fetch_fail,
            payload: {httpError}
          });
        }
      )
    }
  }
}

export  { actions as actions_UserView };



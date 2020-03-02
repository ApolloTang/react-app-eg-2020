import { API } from 'app/resources/users/services'
import { actionNames } from 'root/action-names'

// import c from '../../common/actions-names';
// import {nameSpace} from '../../config';

// import API from '../../services/api';

// import { push } from 'connected-react-router'
// import Action_userCatelog from  '../user-catelog/action'

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
            if ( user.hasOwnProperty('httpError')) {
              const httpError = user.httpError;
              dispatch({
                type: actionNames.usersPage_userView_fetch_fail,
                payload: {httpError}
              });
              return {httpError};
            } else {
              dispatch({
                type: actionNames.usersPage_userView_fetch_success,
                payload: {user}
              });
              return user;
            }
          }
          worker_apiUserGetOne(user);
        },
        (err)=>{
          // dispatch({
          //   type: c[`${nameSpace}__userView_fetch_fail`],
          //   error: err
          // });
        }
      )
    }
  },

  // deleteUser(userId) {
  //   return (dispatch, getState) => {
  //     dispatch({
  //       type: c[`${nameSpace}__userView_delete_begin`],
  //     });
  //     return API.users.del(userId).then(
  //       user=>{
  //         dispatch({
  //           type: c[`${nameSpace}__userView_delete_success`],
  //           payload: {user}
  //         });
  //
  //         // List of task to clean up deleting:
  //         //    1) remove resources.viewUser.userId
  //         //        done in its reduce  <---  @TODO not yet impliment
  //         //    2) remove resources.userCatelog.userId
  //         //        done in its reduce  <---  @TODO not yet impliment
  //         //    3) refeach userCatelog
  //                   dispatch(Action_userCatelog.fetchUserCatelog() )
  //         //    4) navigate to /users
  //                   dispatch( push('/users'));
  //
  //         return user;
  //       }
  //     ).catch((err)=>{
  //         dispatch({
  //           type: c[`${nameSpace}__userView_delete_fail`],
  //           error: err
  //         });
  //     });
  //   }
  // },
}

export  { actions as actions_UserView };



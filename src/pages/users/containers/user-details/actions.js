import { API } from 'app/resources/users/services'
import { actionNames } from 'root/action-names'

const actions = {

  init() {
    return (dispatch, getState) => {
      dispatch({
        type: actionNames.usersPage_userDetails_init,
      })
    }
  },

  fetchUser(userId) {
    return (dispatch, getState) => {
      dispatch({
        type: actionNames.usersPage_userDetails_fetch_begin
      })
      return dispatch(API.users.getOne(userId)).then(
        user => {
          dispatch({
            type: actionNames.usersPage_userDetails_fetch_success,
            payload: {user}
          })
          return user
        },
        error => {
          dispatch({
            type: actionNames.usersPage_userDetails_fetch_fail,
            payload: error
          })
        }
      )
    }
  }
}

export  { actions as actions_userDetails }



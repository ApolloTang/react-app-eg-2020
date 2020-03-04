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

  fetchUser: (userId) => async (dispatch, getState) => {
    dispatch({
      type: actionNames.usersPage_userDetails_fetch_begin
    })

    let user

    try {
      user = await dispatch( API.users.getOne(userId) )
      dispatch({
        type: actionNames.usersPage_userDetails_fetch_success,
        payload: {user}
      })
    } catch (error) {
      dispatch({
        type: actionNames.usersPage_userDetails_fetch_fail,
        payload: error
      })
    }

    return user
  }
}

export  { actions as actions_userDetails }



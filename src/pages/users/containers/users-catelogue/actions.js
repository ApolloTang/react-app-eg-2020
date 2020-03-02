import { API } from 'app/resources/users-catelogue/services'
import { actionNames } from 'root/action-names'

console.log('yyy actionNames: ' , actionNames)

const userCatelog = {
  init() {
    return (dispatch, getState) => {
      dispatch({
        type: actionNames.usersPage_userCatelogue_init
      })
    }
  },
  fetchUserCatelog () {
    return (dispatch, getState) => {
      dispatch({
        type: actionNames.usersPage_userCatelogue_fetch_begin
      })

      return API.userCatelog.getAll().then(
        userCatelog => {
          const ids_userCatelog = userCatelog.map( user=>user._id)
          dispatch({
            type: actionNames.usersPage_userCatelogue_fetch_success,
            payload: { ids_userCatelog }
          })
        },
        err=>{
          dispatch({
            type: actionNames.usersPage_userCatelogue_fetch_fail,
            error: err
          })
        },

      )
    }
  },
}

export default userCatelog



import { actionNames } from 'root/action-names'
console.log('yyy actionNames: ' , actionNames)

// import API from '../../services/api';


const userCatelog = {
  init() {
    return (dispatch, getState) => {
      dispatch({
        type: actionNames.usersPage_userCatelogue_init
      });
    };
  },
  fetchUserCatelog () {
    return (dispatch, getState) => {
      dispatch({
        type: c[`${nameSpace}__userCatelog_fetch_begin`],
      });
      return API.userCatelog.getAll().then(
        userCatelog=>{
          const ids_userCatelog = userCatelog.map( user=>user._id);
          if (!TEST && !PROD) {
            // simulate delay
            setTimeout( ()=>{
              dispatch({
                type: c[`${nameSpace}__userCatelog_fetch_success`],
                payload: { ids_userCatelog }
              });
            },1000);
          } else if (TEST || PROD) {
              dispatch({
                type: c[`${nameSpace}__userCatelog_fetch_success`],
                payload: { ids_userCatelog }
              });
          }
        },
        err=>{
          dispatch({
            type: c[`${nameSpace}__userCatelog_fetch_fail`],
            error: err
          });
        },

      );
    }
  },
}

export default userCatelog;



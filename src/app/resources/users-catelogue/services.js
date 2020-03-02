import store from 'root/store';
import {createHttp} from 'util/rest';
import c from '../../common/actions-names';
import {rootUrl} from 'root/config';


const userCatelog = {
  getAll() {
    return createHttp
      .get(`${rootUrl}/userCatelog`)
      .then(
        userCatelog => {
          store.dispatch( {
            type: __resources_userCatelog_update`],
            payload: {userCatelog}
          });
          return userCatelog;
        }
      );
  }
}


export default userCatelog;

import store from 'root/store';
import {createHttp} from 'util/rest';
import { actionNames } from 'root/action-names'

import {rootUrl} from 'root/config';


const userCatelog = {
  getAll() {
    return createHttp
      .get(`${rootUrl}/userCatelog`)
      .then(
        userCatelog => {

          store.dispatch( {
            type: actionNames.resources_userCatelogue_update,
            payload: {userCatelog}
          });
          return userCatelog;
        }
      );
  }
}


const API = {
  userCatelog,
};

export  {API}

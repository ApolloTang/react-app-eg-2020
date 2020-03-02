import _ from 'lodash';

import store from 'root/store';
import {createHttp} from 'util/rest';
import { actionNames } from 'root/action-names'

import { normalized } from 'util/helper.js'
import { rootUrl } from 'root/config'


const users = {
  getOne(userId) {
    return createHttp
      .get(`${rootUrl}/users/${userId}`)
      .then(
        user => {
          const users_norm = normalized([user])

          store.dispatch( {
            type: actionNames.resources_users_update,
            payload: {user: users_norm}
          });
          return user;
        }
      );
  }

}

const API = {
  users,
}

export { API }

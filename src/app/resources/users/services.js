import _get from 'lodash/get';

import store from 'root/store';
import {createHttp} from 'util/rest';
import { actionNames } from 'root/action-names'

import { normalized } from 'util/helper.js'
import { rootUrl } from 'root/config'


const users = {
  getOne(userId) {
    const appState = store.getState()
    const existingIds = Object.keys(_get(appState, 'resources.users', {}))
    const userIdExist = existingIds.includes(userId)

    if (!userIdExist) {
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
    } else {
      return new Promise(rs=>{
        const user = _get(appState, 'resources.users.${userId}', {})
        store.dispatch( {
          type: actionNames.resources_users_update,
          payload: {user}
        });
        rs(user)
      })
    }

  }

}

const API = {
  users,
}

export { API }

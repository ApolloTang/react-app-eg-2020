import _ from 'lodash';
import { actions_UserView } from './actions';

const mapStoreToProps = store=>{
  // const users = _.get(store, `modules.${nameSpace}.resources.users`, null);
  // const isLoading = _.get(store, `modules.${nameSpace}.session.userView.isLoading`, true);
  // const httpError = _.get(store, `modules.${nameSpace}.session.userView.httpError`, void 0);
  return {
    // users,
    // isLoading,
    // httpError
  }
};

const mapDispatchToProps = dispatch => ({
  dispatch_init() { dispatch( actions_UserView.init() ) },
  dispatch_fetchUser(userId) { dispatch( actions_UserView.fetchUser(userId) ) },

  // dispatch_deleteUser(userId) { dispatch( Action.deleteUser(userId) ) },
});


export {mapStoreToProps, mapDispatchToProps};

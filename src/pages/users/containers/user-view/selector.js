import _ from 'lodash';
import { actions_UserView } from './actions';

const mapStoreToProps = store=>{
  const users = _.get(store, `resources.users`, {});
  const isLoading = _.get(store, `usersPage.ui.isLoading`, true);

  return {
    users,
    isLoading
  }
};

const mapDispatchToProps = dispatch => ({
  dispatch_init() { dispatch( actions_UserView.init() ) },
  dispatch_fetchUser(userId) { dispatch( actions_UserView.fetchUser(userId) ) },
});


export {mapStoreToProps, mapDispatchToProps};

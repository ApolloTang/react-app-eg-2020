import _ from 'lodash';
import actions from './actions';
// import {nameSpace} from '../../config;

const mapStoreToProps = store=>{
  // const userCatelog = _.get(store, `modules.${nameSpace}.resources.userCatelog`, null);
  // const isLoading = _.get(store, `modules.${nameSpace}.session.userCatelog.isLoading`, true);
  const isLoading = true
  // const ids_userCatelog = _.get(store, `modules.${nameSpace}.session.userCatelog.ids_userCatelog`, void 0);
  return {
    // userCatelog,
    isLoading,
    // ids_userCatelog
  }
};

const mapDispatchToProps = dispatch => ({
  dispatch_init() { dispatch(actions.init() ) },
  // dispatch_fetchUserCatelog() { dispatch(Action.fetchUserCatelog() ) },
  // dispatch_someAction() { dispatch( Action_someAction() ); }
});


export {mapStoreToProps, mapDispatchToProps};

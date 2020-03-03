import _ from 'lodash'
import { actions_userDetails } from './actions'

const mapStoreToProps = store=>{
  const users = _.get(store, `resources.users`, {})
  const isLoading = _.get(store, `usersPage.userDetails.isLoading`, true)

  return {
    users,
    isLoading
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch_init() { dispatch( actions_userDetails.init() ) },
  dispatch_fetchUser(userId) { dispatch( actions_userDetails.fetchUser(userId) ) },
})


export {mapStoreToProps, mapDispatchToProps}

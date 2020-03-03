import { actionNames_usersPage_userCatelogue } from './users-catelogue/action-names'
import { actionNames_usersPage_userDetails } from './user-details/action-names'

const actionNames = {
  ...actionNames_usersPage_userCatelogue,
  ...actionNames_usersPage_userDetails
}

export { actionNames as actionNames_usersPage }

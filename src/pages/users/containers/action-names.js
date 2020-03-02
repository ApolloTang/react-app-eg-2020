import { actionNames_usersPage_userCatelogue } from './users-catelogue/action-names';
import { actionNames_usersPage_userView } from './user-view/action-names';

const actionNames = {
  ...actionNames_usersPage_userCatelogue,
  ...actionNames_usersPage_userView
}

export { actionNames as actionNames_usersPage }

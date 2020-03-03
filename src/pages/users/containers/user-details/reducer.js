import { actionNames } from 'root/action-names'

const initialState = {
  isLoading: false,
}

const reducer = (state = {...initialState}, action) => {
  switch (action.type) {
    case actionNames.usersPage_userDetails_init: {
      return { ...state }
    }

    case actionNames.usersPage_userDetails_fetch_begin: {
      const state_prev = {...state}
      const state_next = {
        ...state,
        isLoading: true
      }
      return state_next
    }

    case actionNames.usersPage_userDetails_fetch_success: {
      const state_prev = {...state}
      const state_next = {
        ...state,
        isLoading: false
      }
      return state_next
    }

    case actionNames.usersPage_userDetails_fetch_fail : {
      const payload = action.payload
      const state_prev = {...state}
      const state_next = {
        ...state,
        isLoading: false,
      }
      return state_next
    }

    default: {
      return state
    }
  }
}

export  { reducer as usersPage_userDetails }
export {initialState}

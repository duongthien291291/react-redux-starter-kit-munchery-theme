
// ------------------------------------
// Constants
// ------------------------------------
export const RESET_APP_STATE = 'RESET_APP_STATE'
export const UPDATE_APP_STATE = 'UPDATE_APP_STATE'
export const UPDATE_USER_DATA_FOR_APP_STATE = 'UPDATE_USER_DATA_FOR_APP_STATE'

export function updateAppState (userData) {
  return {
    type: UPDATE_APP_STATE,
    userData
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function updateUserDataForAppState (user) {
  return {
    type: UPDATE_USER_DATA_FOR_APP_STATE,
    user
  }
}

export const actions = {
  updateAppState,
  updateUserDataForAppState,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RESET_APP_STATE]: (state, action) =>   ({...state, user: action.payload.user}),
  [UPDATE_APP_STATE]: (state, action) => {
    if (action.userData) {
      return {
        ...state,
        acceptToken: action.userData && action.userData.acceptToken ? action.userData.acceptToken : null,
        refreshToken: action.userData && action.userData.refreshToken ? action.userData.refreshToken : null,
        userData: action.userData ? action.userData : {}
      }
    }

    return initialState
  },
  [UPDATE_USER_DATA_FOR_APP_STATE]: (state, action) => {
    if (action.user) {
      return {
        ...state,
        user: action.user
      }
    }

    return initialState
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  user: {}
}

export default function appReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

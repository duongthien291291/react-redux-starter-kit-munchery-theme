import { browserHistory } from 'react-router';

import { signOut as signOutFunc } from '../../../containers/AppReducer'

// ------------------------------------
// Constants
// ------------------------------------


// ------------------------------------
// Actions
// ------------------------------------
export function signOut() {
  return (dispatch, getState) => {

    dispatch(signOutFunc());

  };
}


export const actions = {
  signOut
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function muncheryHeaderReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

import { browserHistory } from 'react-router';
import axios from 'axios'

import { updateAppState } from '../../../containers/AppReducer'
import { signIn } from '../../SignIn/modules/SignInReducer'

// ------------------------------------
// Constants
// ------------------------------------
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SIGNUP_RUNNING = 'SIGNUP_RUNNING';
export const SIGNUP_RESET_STATE = 'SIGNUP_RESET_STATE';

export function signUp(user) {
  return (dispatch, getState) => {

    const {signup} = getState();
    if (!signup.isRunning) {
      dispatch(signUpRunning());

      axios.post('/accounts/register', {
          email: user.userName,
          password: user.password,
          confirmPassword: user.confirmPassword
        }
      ).then(function (response) {
          //call login when register success
          dispatch(signIn({userName: user.userName, password: user.password}));
          dispatch(signUpSuccess());
        }).catch(function (error) {
          dispatch(signUpError(error.response.data));
        });
    }

  };
}

// ------------------------------------
// Actions
// ------------------------------------
export function signUpSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function signUpError(message) {
  return {
    type: SIGNUP_ERROR,
    message
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function signUpRunning() {
  return {
    type: SIGNUP_RUNNING
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function signUpResetState() {
  return {
    type: SIGNUP_RESET_STATE
  }
}


export const actions = {
  signUp,
  signUpResetState
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SIGNUP_SUCCESS]: function (state, action) {
    return {...state, signUpErrorMessage: '', isRunning: false};
  },
  [SIGNUP_ERROR]: function (state, action) {
    return {...state, signUpErrorMessage: action.message, isRunning: false};
  },
  [SIGNUP_RUNNING]: function (state, action) {
    return {...state, isRunning: true};
  },
  [SIGNUP_RESET_STATE]: function (state, action) {
    return initialState;
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  signUpErrorMessage: '',
  isRunning: false
};
export default function signupReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state
}

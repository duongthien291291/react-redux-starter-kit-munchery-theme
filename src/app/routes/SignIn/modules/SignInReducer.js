import { browserHistory } from 'react-router'
import axios from 'axios'

import { updateAppState } from '../../../containers/AppReducer'

// ------------------------------------
// Constants
// ------------------------------------
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
export const SIGNIN_ERROR = 'SIGNIN_ERROR'
export const SIGNIN_RUNNING = 'SIGNIN_RUNNING'
export const SIGNIN_RESET_STATE = 'SIGNIN_RESET_STATE'
export const GET_USER_INFO = 'GET_USER_INFO'

// ------------------------------------
// Actions
// ------------------------------------
export function signIn(user) {
  return (dispatch, getState) => {
    const { signin } = getState()
    if (!signin.isRunning) {
      dispatch(signInRunning())

      axios.post('/accounts/token', {
        email: user.userName,
        password: user.password
      }
      ).then(function (response) {
        dispatch(signInSuccess(response.data));
        //get user info
        axios.get('/accounts/userinfo').then((res)=>{
        dispatch(getUserInfo(res.data));
        })
        dispatch(updateAppState(response.data));
        browserHistory.push('/menu');
      }).catch(function (error) {
        dispatch(signInError(error.response.data))
      })
    }
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function getUserInfo(userInfo) {
  return {
    type: GET_USER_INFO,
    userInfo
  }
}
export function signInSuccess(user) {
  return {
    type: SIGNIN_SUCCESS,
    user
  }
}
// ------------------------------------
// Actions
// ------------------------------------
export function signInRunning() {
  return {
    type: SIGNIN_RUNNING
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function signInError(message) {
  return {
    type: SIGNIN_ERROR,
    message
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function signInResetState() {
  return {
    type: SIGNIN_RESET_STATE
  }
}

export const actions = {
  signIn,
  signInResetState
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SIGNIN_SUCCESS]: function (state, action) {
    return { ...state, signInErrorMessage: '', isRunning: false }
  },
  [SIGNIN_ERROR]: function (state, action) {
    return { ...state, signInErrorMessage: action.message, isRunning: false }
  },
  [SIGNIN_RUNNING]: function (state, action) {
    return { ...state, isRunning: true }
  },
  [SIGNIN_RESET_STATE]: function (state, action) {
    return initialState
  },
  [GET_USER_INFO]: function (state, action) {
    return {
      ...state,
      userInfo: action.userInfo
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  signInErrorMessage: '',
  isRunning: false,
  userInfo: {
    id: 1,
    userName: 'admin',
    email: 'admin@gmail.com',
    phoneNumber: '29121313',
    firstName: 'Nguyen Cat',
    lastName: 'Pham',
    createAt: '2017-05-15T02:19:41.000Z',
    updateAt: '2017-05-15T02:19:41.000Z',
    totalPrice: 121312,
    roles: [
      {
        id: 1,
        name: 'Administrator'
      }
    ],
    carts: [
      {
        id: 1,
        menuId: 1,
        menuProductId: 1,
        productId: 1,
        productName: 'Chimichurri Steak & Potato Salad',
        price: 123123,
        quantity: 3,
        createAt: '2017-05-15T02:19:41.000Z',
        orderQuantity: 2
      },
      {
        id: 2,
        menuId: 1,
        menuProductId: 1,
        productId: 1,
        productName: 'Chimichurri Steak & Potato Salad',
        price: 123123,
        quantity: 3,
        createAt: '2017-05-15T02:19:41.000Z',
        orderQuantity: 2
      }
    ],
    addresses: [
      {
        id: 1,
        name: 'Nguyen Cat Pham',
        street: '258 Pham Duc Tho',
        ward: 'Ben Nghe',
        district: '1',
        province: 'Ho Chi Minh',
        userId: 2,
        wardId: 1,
        districtId: 1,
        provinceId: 1
      },
      {
        id: 2,
        name: 'Nguyen Cat Pham',
        street: '258 Pham Duc Tho',
        ward: 'Ben Nghe',
        district: '1',
        province: 'Ho Chi Minh',
        userId: 2,
        wardId: 1,
        districtId: 1,
        provinceId: 1
      }
    ]
  }
}

export default function signinReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO'
export const UPDATE_QUESTION_INFO = 'UPDATE_QUESTION_INFO'

// ------------------------------------
// Actions
// ------------------------------------
export function updateUserInfo (user) {
  return {
    type    : UPDATE_USER_INFO,
    user
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function updateQuestionInfo (question) {
  return {
    type    : UPDATE_QUESTION_INFO,
    question
  }
}

export const actions = {
  updateUserInfo,
  updateQuestionInfo
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_USER_INFO]: (state, action) => ({...state, user: action.user}) ,
  [UPDATE_QUESTION_INFO]: (state, action) => ({...state, question: action.question})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  user: {},
  question: {}
}

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

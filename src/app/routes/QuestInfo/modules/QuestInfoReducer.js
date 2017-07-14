
// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'
export const UPDATE_QUESTION_INFO = 'UPDATE_QUESTION_INFO'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().counter
        })
        resolve()
      }, 200)
    })
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function updateQuestionInfoById (questionId) {
  return (dispatch, getState) => {
    const { app } = getState();
    let question = app.phase1Questions.find((obj) => (obj.id == questionId));
    dispatch(updateQuestionInfo(question));
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
  increment,
  doubleAsync,
  updateQuestionInfoById
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]    : (state, action) => state + action.payload,
  [COUNTER_DOUBLE_ASYNC] : (state, action) => state * 2,
  [UPDATE_QUESTION_INFO]: (state, action) => ({...state, question: action.question})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  question: {}
}
export default function questInfoReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

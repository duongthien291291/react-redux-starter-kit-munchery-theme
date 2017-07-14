
// ------------------------------------
// Constants
// ------------------------------------
export const RESET_APP_STATE = 'RESET_APP_STATE'
export const UPDATE_APP_STATE = 'UPDATE_APP_STATE'
export const UPDATE_USER_DATA_FOR_APP_STATE = 'UPDATE_USER_DATA_FOR_APP_STATE'
export const UPDATE_USERS = 'UPDATE_USERS'
export const UPDATE_PHASE1_QUESTIONS = 'UPDATE_PHASE1_QUESTIONS'
export const UPDATE_PHASE2_QUESTIONS = 'UPDATE_PHASE2_QUESTIONS'
export const FINISHED_PHASE1_QUESTION = 'FINISHED_PHASE1_QUESTION'

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

// ------------------------------------
// Actions
// ------------------------------------
export function updatePhase1Questions (questions) {
  return {
    type: UPDATE_PHASE1_QUESTIONS,
    questions
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function updatePhase2Questions (questions) {
  return {
    type: UPDATE_PHASE2_QUESTIONS,
    questions
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function updateUsers (users) {
  return {
    type: UPDATE_USERS,
    users
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function finishedPhase1Question (questionId) {
  return {
    type: FINISHED_PHASE1_QUESTION,
    questionId
  }
}

export const actions = {
  updateAppState,
  updateUserDataForAppState,
  updateUsers,
  updatePhase1Questions,
  updatePhase2Questions,
  finishedPhase1Question
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RESET_APP_STATE]: (state, action) =>   ({
    ...state,
    user: action.payload.user,
    users: action.payload.users,
    phase1Questions: action.payload.phase1Questions,
    phase2Questions: action.payload.phase2Questions
  }),
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
  },
  [UPDATE_PHASE1_QUESTIONS]: (state, action) =>   ({...state, phase1Questions: action.questions}),
  [UPDATE_PHASE2_QUESTIONS]: (state, action) =>   ({...state, phase2Questions: action.questions}),
  [UPDATE_USERS]: (state, action) =>   ({...state, users: action.users}),
  [FINISHED_PHASE1_QUESTION]: (state, action) => ({
    ...state,
    phase1Questions: state.phase1Questions.map(x => (x.id == action.questionId ? {...x, done: true} : x))})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  user: {},
  users: [],
  phase1Questions: [],
  phase2Questions: []
}

export default function appReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

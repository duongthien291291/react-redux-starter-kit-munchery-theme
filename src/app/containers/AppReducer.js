import {browserHistory} from 'react-router'
import {toastr} from 'react-redux-toastr'

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
export const FINISHED_PHASE2_QUESTION = 'FINISHED_PHASE2_QUESTION'
export const ADD_USER_TO_PHASE2_USERS = 'ADD_USER_TO_PHASE2_USERS'
export const ADD_QUESTION_TO_PHASE2_USER = 'ADD_QUESTION_TO_PHASE2_USER'
export const UPDATE_STATUS_FOR_USER_PHASE2 = 'UPDATE_STATUS_FOR_USER_PHASE2'
export const COPY_PHASE2USER_TO_PHASE2USERRESULT = 'COPY_PHASE2USER_TO_PHASE2USERRESULT'
export const CLEAR_QUESTION_OF_PHASE2USERS = 'CLEAR_QUESTION_OF_PHASE2USERS'
export const CHECK_ANSWERS_OF_PHASE2USERS = 'CHECK_ANSWERS_OF_PHASE2USERS'
export const RANDOM_A_WINNER = 'RANDOM_A_WINNER'

export function updateAppState(userData) {
  return {
    type: UPDATE_APP_STATE,
    userData
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function updateUserDataForAppState(user) {
  return {
    type: UPDATE_USER_DATA_FOR_APP_STATE,
    user
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function updatePhase1Questions(questions) {
  return {
    type: UPDATE_PHASE1_QUESTIONS,
    questions
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function updatePhase2Questions(questions) {
  return {
    type: UPDATE_PHASE2_QUESTIONS,
    questions
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function updateUsers(users) {
  return {
    type: UPDATE_USERS,
    users
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function finishedPhase1Question(questionId) {
  return {
    type: FINISHED_PHASE1_QUESTION,
    questionId
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function finishedPhase2Question(questionId) {
  return {
    type: FINISHED_PHASE2_QUESTION,
    questionId
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function addUserToPhase2Users(userId) {
  return {
    type: ADD_USER_TO_PHASE2_USERS,
    userId
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function addQuestionToPhase2User(question) {
  return (dispatch, getState) => {
    dispatch(addQuestion(question));
    let {app} = getState();
    let listActiveUsers = app.phase2Users.filter((x) => (!x.done));

    // let userAnswers = question.userAnswers;
    // let realAnswers = question.answers;
    // if (!userAnswers.length == realAnswers.length
    //   || !realAnswers.every((x) => userAnswers.some((y) => y == x))) {
    //   dispatch(updateStatusForUserOfPhase2());
    // }

    if (listActiveUsers.every((x) => x.question)) {
      let listPhase2Users = app.phase2Users.map(x => x);
      dispatch(checkAnswersOfPhase2Users());
      dispatch(copyPhase2UserToPhase2UserResult(listPhase2Users));
      setTimeout(() => {
        browserHistory.push('/phase2result');
      }, 1000);
    }
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION_TO_PHASE2_USER,
    question
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function updateStatusForUserOfPhase2() {
  return {
    type: UPDATE_STATUS_FOR_USER_PHASE2
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function copyPhase2UserToPhase2UserResult(users) {
  return {
    type: COPY_PHASE2USER_TO_PHASE2USERRESULT,
    users
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function clearQuestionOfPhase2Users() {
  return {
    type: CLEAR_QUESTION_OF_PHASE2USERS
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function checkAnswersOfPhase2Users() {
  return {
    type: CHECK_ANSWERS_OF_PHASE2USERS
  }
}

// ------------------------------------
// Actions
// ------------------------------------
export function randomAWinner() {
  return (dispatch, getState) => {
    let {app} = getState();
    let listActiveUsers = app.phase2Users.filter((x) => (!x.done));
    const randomIndex = Math.floor(Math.random() * (listActiveUsers.length - 1 + 1) + 1);

    setTimeout(() => {
      toastr.success('Congratulations', 'The winner is ' + listActiveUsers[randomIndex - 1].name);
    }, 1000);
  }
}

export const actions = {
  updateAppState,
  updateUserDataForAppState,
  updateUsers,
  updatePhase1Questions,
  updatePhase2Questions,
  finishedPhase1Question,
  finishedPhase2Question,
  addUserToPhase2Users,
  addQuestionToPhase2User,
  randomAWinner
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RESET_APP_STATE]: (state, action) => ({
    ...state,
    user: action.payload.user,
    users: action.payload.users,
    phase2Users: action.payload.phase2Users,
    phase2UserResults: action.payload.phase2UserResults,
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
  [UPDATE_PHASE1_QUESTIONS]: (state, action) => ({...state, phase1Questions: action.questions}),
  [UPDATE_PHASE2_QUESTIONS]: (state, action) => ({...state, phase2Questions: action.questions}),
  [UPDATE_USERS]: (state, action) => ({...state, users: action.users}),
  [FINISHED_PHASE1_QUESTION]: (state, action) => ({
    ...state,
    phase1Questions: state.phase1Questions.map(x => (x.id == action.questionId ? {...x, done: true} : x))
  }),
  [FINISHED_PHASE2_QUESTION]: (state, action) => ({
    ...state,
    phase2Questions: state.phase2Questions.map(x => (x.id == action.questionId ? {...x, done: true} : x))
  }),
  [ADD_USER_TO_PHASE2_USERS]: (state, action) => ({
    ...state,
    phase2Users: [...state.phase2Users, state.users.find((x) => x.id == action.userId)]
  }),
  [ADD_QUESTION_TO_PHASE2_USER]: (state, action) => ({
    ...state,
    phase2Users: state.phase2Users.map(x => (x.id == state.user.id ? {...x, question: action.question} : x))
  }),
  [UPDATE_STATUS_FOR_USER_PHASE2]: (state, action) => ({
    ...state,
    phase2Users: state.phase2Users.map(x => (x.id == state.user.id ? {...x, done: true} : x))
  }),
  [COPY_PHASE2USER_TO_PHASE2USERRESULT]: (state, action) => ({
    ...state,
    phase2UserResults: [...action.users.filter(x => !x.done)],
    phase2Users: state.phase2Users.map(x => ({...x, question: null}))
  }),
  [CHECK_ANSWERS_OF_PHASE2USERS]: (state, action) => {
    var usersHaveRightAnswer = state.phase2Users.map(x =>
      (!x.done && !x.question.answers.every(y => x.question.userAnswers.some(z => z == y)) ? {...x, done: true} : x));
    if (usersHaveRightAnswer.every(x => x.done)) {
      usersHaveRightAnswer = state.phase2Users;
    }
    return {
      ...state,
      phase2Users: [...usersHaveRightAnswer]
    }
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = {
  user: {},
  users: [],
  phase2Users: [],
  phase2UserResults: [],
  phase1Questions: [],
  phase2Questions: []
}

export default function appReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

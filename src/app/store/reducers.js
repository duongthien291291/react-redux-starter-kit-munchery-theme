import { combineReducers } from 'redux'
import locationReducer from './location'
import { reducer as formReducer } from 'redux-form'
import userInfoReducer from '../components/UserInfo/userInfoReducer'
import homeReducer from '../routes/Home/modules/HomeReducer'
import appReducer from '../containers/AppReducer'
import questInfoReducer from '../routes/QuestInfo/modules/QuestInfoReducer'
import phase2QuestInfoReducer from '../routes/Phase2QuestInfo/modules/Phase2QuestInfoReducer'
import {reducer as toastrReducer} from 'react-redux-toastr'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    form: formReducer,
    toastr: toastrReducer,
    userInfo: userInfoReducer,
    home: homeReducer,
    app: appReducer,
    questInfo: questInfoReducer,
    phase2QuestInfo: phase2QuestInfoReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer

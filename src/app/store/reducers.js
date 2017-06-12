import { combineReducers } from 'redux'
import locationReducer from './location'
import { reducer as formReducer } from 'redux-form'
import loadingReducer from '../components/Loading/LoadingReducer'
import appReducer from '../containers/AppReducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    form: formReducer,
    loading: loadingReducer,
    app: appReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer

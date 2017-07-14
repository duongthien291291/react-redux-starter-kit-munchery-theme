import { injectReducer } from '../../store/reducers'
// import data from '../../../../data.json'
// import { updateUsers, updatePhase1Questions, updatePhase2Questions } from '../../containers/AppReducer'

export default (store) => {
  const onEnter = (nextState, transition) => {
    // let state = store.getState();
    //
    // if(!state.app.users || state.app.users.length == 0){
    //   store.dispatch(updateUsers(data.users));
    // }
    //
    // if(!state.app.phase1Questions || state.app.phase1Questions.length == 0){
    //   store.dispatch(updatePhase1Questions(data.phase1Questions));
    // }
    //
    // if(!state.app.phase2Questions || state.app.phase2Questions.length == 0){
    //   store.dispatch(updatePhase2Questions(data.phase2Questions));
    // }
  }

  return {
    onEnter: onEnter,
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
      /*  Webpack - use 'require.ensure' to create a split point
       and embed an async module loader (jsonp) when bundling   */
      require.ensure([], (require) => {
        /*  Webpack - use require callback to define
         dependencies for bundling   */
        const Home = require('./containers/HomeContainer').default
        const reducer = require('./modules/HomeReducer').default

        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, {key: 'home', reducer})

        /*  Return getComponent   */
        cb(null, Home)

        /* Webpack named bundle   */
      }, 'Home')
    }
  };
}

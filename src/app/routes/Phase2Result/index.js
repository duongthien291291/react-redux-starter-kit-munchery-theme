import { injectReducer } from '../../store/reducers'
import {toastr} from 'react-redux-toastr'


export default (store) => {
  const onEnter = (nextState, transition) => {
    const state = store.getState();
    if (!state.app.phase2UserResults || state.app.phase2UserResults.length == 0) { transition('/phase2') };

    let activeUsers = state.app.phase2Users.filter(x => !x.done && x.question == null);
    if(activeUsers.length == 1){
      setTimeout(() => {
        toastr.success('Congratulations', 'The winner is ' + activeUsers[0].name);
      }, 2000);
    }
  };
  const onLeave = (nextState, transition) => {
  };


  return {
    onEnter: onEnter,
    onLeave: onLeave,
    path: '/phase2result',
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
      /*  Webpack - use 'require.ensure' to create a split point
       and embed an async module loader (jsonp) when bundling   */
      require.ensure([], (require) => {
        /*  Webpack - use require callback to define
         dependencies for bundling   */
        const Phase2Result = require('./containers/Phase2ResultContainer').default
        const reducer = require('./modules/Phase2ResultReducer').default

        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, { key: 'phase2Result', reducer })

        /*  Return getComponent   */
        cb(null, Phase2Result)

        /* Webpack named bundle   */
      }, 'Phase2Result')
    }
  };
}

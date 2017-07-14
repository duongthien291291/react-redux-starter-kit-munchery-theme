import { injectReducer } from '../../store/reducers'
import QuestRoute from '../Quest'
import QuestInfoRoute from '../QuestInfo'


export default (store) => {
  const onEnter = (nextState, transition) => {
    const state = store.getState();
    if (!state.app.user.id) { transition('/') };
  };
  const onLeave = (nextState, transition) => {
  };


  return {
    path : 'phase1',
    onEnter: onEnter,
    onLeave: onLeave,
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
      /*  Webpack - use 'require.ensure' to create a split point
       and embed an async module loader (jsonp) when bundling   */
      require.ensure([], (require) => {
        /*  Webpack - use require callback to define
         dependencies for bundling   */
        const Phase1 = require('./containers/Phase1Container').default
        const reducer = require('./modules/Phase1Reducer').default

        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, { key: 'phase1', reducer });

        /*  Return getComponent   */
        cb(null, Phase1);

        /* Webpack named bundle   */
      }, 'Phase1')
    },
    indexRoute: QuestRoute(store),
    childRoutes: [
      QuestInfoRoute(store)
    ]
  };
}


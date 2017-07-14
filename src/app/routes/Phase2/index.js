import { injectReducer } from '../../store/reducers'
import Phase2UsersRoute from '../Phase2Users'
import Phase2QuestsRoute from '../Phase2Quests'
import Phase2QuestInfoRoute from '../Phase2QuestInfo'


export default (store) => {
  const onEnter = (nextState, transition) => {
    const state = store.getState();
    if (!state.app.phase2Users || state.app.phase2Users.length == 0) { transition('/') };
  };
  const onLeave = (nextState, transition) => {
  };


  return {
    path : 'phase2',
    onEnter: onEnter,
    onLeave: onLeave,
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
      /*  Webpack - use 'require.ensure' to create a split point
       and embed an async module loader (jsonp) when bundling   */
      require.ensure([], (require) => {
        /*  Webpack - use require callback to define
         dependencies for bundling   */
        const Phase1 = require('./containers/Phase2Container').default
        const reducer = require('./modules/Phase2Reducer').default

        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, { key: 'phase1', reducer });

        /*  Return getComponent   */
        cb(null, Phase1);

        /* Webpack named bundle   */
      }, 'Phase1')
    },
    indexRoute: Phase2UsersRoute(store),
    childRoutes: [
      Phase2QuestsRoute(store),
      Phase2QuestInfoRoute(store)
    ]
  };
}


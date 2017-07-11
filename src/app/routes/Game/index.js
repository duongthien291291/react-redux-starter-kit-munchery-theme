import { injectReducer } from '../../store/reducers'
import QuestRoute from '../Quest'
import QuestInfoRoute from '../QuestInfo'


export default (store) => {
  const onEnter = (nextState, transition) => {
  };
  const onLeave = (nextState, transition) => {
  };


  return {
    path : 'game',
    onEnter: onEnter,
    onLeave: onLeave,
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
      /*  Webpack - use 'require.ensure' to create a split point
       and embed an async module loader (jsonp) when bundling   */
      require.ensure([], (require) => {
        /*  Webpack - use require callback to define
         dependencies for bundling   */
        const Game = require('./containers/GameContainer').default
        const reducer = require('./modules/GameReducer').default

        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, { key: 'game', reducer });

        /*  Return getComponent   */
        cb(null, Game);

        /* Webpack named bundle   */
      }, 'Game')
    },
    indexRoute: QuestRoute(store),
    childRoutes: [
      QuestInfoRoute(store)
    ]
  };
}


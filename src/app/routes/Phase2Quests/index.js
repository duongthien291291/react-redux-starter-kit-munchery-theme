import { injectReducer } from '../../store/reducers'

export default (store) => {
  const onEnter = (nextState, transition) => {
    // store.dispatch(updateQuestionInfoById(nextState.params.id));
  };
  const onLeave = (nextState, transition) => {
  };


  return {
    path : 'quests',
    onEnter: onEnter,
    onLeave: onLeave,
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
      /*  Webpack - use 'require.ensure' to create a split point
       and embed an async module loader (jsonp) when bundling   */
      require.ensure([], (require) => {
        /*  Webpack - use require callback to define
         dependencies for bundling   */
        const Phase2Quests = require('./containers/Phase2QuestsContainer').default
        const reducer = require('./modules/Phase2QuestsReducer').default

        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, { key: 'phase2Quests', reducer })

        /*  Return getComponent   */
        cb(null, Phase2Quests)

        /* Webpack named bundle   */
      }, 'Phase2Quests')
    }
  };
}

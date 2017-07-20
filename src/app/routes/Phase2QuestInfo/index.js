import { injectReducer } from '../../store/reducers'
import { updateQuestionInfoById } from '../Phase2QuestInfo/modules/Phase2QuestInfoReducer'

export default (store) => {
  const onEnter = (nextState, transition) => {
    store.dispatch(updateQuestionInfoById(nextState.params.id));
    // const state = store.getState();
    // if (!state.app.user.id) { transition('/') };
  };
  const onLeave = (nextState, transition) => {
  };


  return {
    path : 'quest-info/:id',
    onEnter: onEnter,
    onLeave: onLeave,
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
      /*  Webpack - use 'require.ensure' to create a split point
       and embed an async module loader (jsonp) when bundling   */
      require.ensure([], (require) => {
        /*  Webpack - use require callback to define
         dependencies for bundling   */
        const Phase2QuestInfo = require('./containers/Phase2QuestInfoContainer').default
        const reducer = require('./modules/Phase2QuestInfoReducer').default

        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, { key: 'phase2QuestInfo', reducer })

        /*  Return getComponent   */
        cb(null, Phase2QuestInfo)

        /* Webpack named bundle   */
      }, 'Phase2QuestInfo')
    }
  };
}

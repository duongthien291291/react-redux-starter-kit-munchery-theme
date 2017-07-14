import { injectReducer } from '../../store/reducers'
import { updateQuestionInfoById } from '../QuestInfo/modules/QuestInfoReducer'

export default (store) => {
  const onEnter = (nextState, transition) => {
    store.dispatch(updateQuestionInfoById(nextState.params.id));
    const state = store.getState();
    if (!state.app.user.id) { transition('/') };
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
        const QuestInfo = require('./containers/QuestInfoContainer').default
        const reducer = require('./modules/QuestInfoReducer').default

        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, { key: 'questInfo', reducer })

        /*  Return getComponent   */
        cb(null, QuestInfo)

        /* Webpack named bundle   */
      }, 'QuestInfo')
    }
  };
}

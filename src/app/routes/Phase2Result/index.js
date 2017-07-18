import { injectReducer } from '../../store/reducers'

export default (store) => ({
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
})

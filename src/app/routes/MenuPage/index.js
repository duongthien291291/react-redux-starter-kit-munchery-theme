import { injectReducer } from '../../store/reducers'
import { getCalendarData } from '../../components/CustomDatePicker/CustomDatePickerReducer'

export default (store) => {
  //check authencation before access page
  const getData = (nextState, transition) => {
    store.dispatch(getCalendarData());
  };

  return{
    onEnter: getData,
    path : 'menu',
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
      /*  Webpack - use 'require.ensure' to create a split point
       and embed an async module loader (jsonp) when bundling   */
      require.ensure([], (require) => {
        /*  Webpack - use require callback to define
         dependencies for bundling   */
        const MenuPage = require('./containers/MenuPageContainer').default
        const reducer = require('./modules/MenuPageReducer').default

        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, { key: 'menuPage', reducer })

        /*  Return getComponent   */
        cb(null, MenuPage)

        /* Webpack named bundle   */
      }, 'MenuPage')
    }
  };
}

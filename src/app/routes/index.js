// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import CommonLayout from '../layouts/CommonLayout'
import MainLayout from '../layouts/MainLayout'
import HomeRoute from './Home/index'
import CounterRoute from './Counter/index'
import MenuRoute from './MenuPage/index'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => {
  return [
    {
      path        : '/',
      component   : MainLayout,
      indexRoute  : HomeRoute(store),
      childRoutes : [
        MenuRoute(store)
      ]
    },
    {
      path: '/menu',
      component: CommonLayout,
      indexRoute: MenuRoute(store)
    },
  ];
}

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes

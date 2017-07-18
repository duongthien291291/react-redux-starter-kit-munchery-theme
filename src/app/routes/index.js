// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import HomeRoute from './Home'
import Phase1Route from './Phase1'
import Phase2Route from './Phase2'
import Phase2ResultRoute from './Phase2Result'

/*  Note: Instead of using JSX, we recommend using react-router
 PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => {
  const onEnter = (nextState, transition) => {

  }

  return [
    {
      path: '/',
      onEnter: onEnter,
      component: CoreLayout,
      indexRoute: HomeRoute(store),
      childRoutes: [
        Phase1Route(store),
        Phase2Route(store),
        Phase2ResultRoute(store),
      ]
    }
  ]
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

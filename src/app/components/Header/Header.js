import React, { Component, PropTypes } from 'react'
import { IndexLink, Link, browserHistory, Router } from 'react-router'
import './Header.scss'


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    routes : PropTypes.array.isRequired,
    store  : PropTypes.object.isRequired
  }

  goto (url) {
    browserHistory.push(url);
  }

  render () {
    const { routes, store } = this.props

    return (
      <div className="header">
        <h1>New Ocean Information System</h1>
        <a onClick={() => this.goto('/')} href="">Users</a>
        {' · '}
        <a onClick={() => this.goto('/phase1')} href="">Game 1</a>
        {' · '}
        <a onClick={() => this.goto('/phase2')} href="">Game 2</a>
        {' · '}
        <a onClick={() => this.goto('/phase2result')} href="">Result</a>
      </div>
    )
  }
}

export default Header


// export const Header = () => (
//   <div className="header">
//     <h1>New Ocean Information System</h1>
//     {/*<IndexLink to='/' activeClassName='route--active'>*/}
//       {/*Users*/}
//     {/*</IndexLink>*/}
//     {/*{' · '}*/}
//     <Link to='/phase1' activeClassName='route--active'>
//       Game 1
//     </Link>
//     {' · '}
//     <Link to='/phase2' activeClassName='route--active'>
//       Game 2
//     </Link>
//     {' · '}
//     <Link to='/phase2result' activeClassName='route--active'>
//       Result
//     </Link>
//   </div>
// )
//
// export default Header

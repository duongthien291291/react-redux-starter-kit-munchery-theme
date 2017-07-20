import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className="header">
    <h1>New Ocean Information System</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Users
    </IndexLink>
    {' · '}
    <Link to='/phase1' activeClassName='route--active'>
      Game 1
    </Link>
    {' · '}
    <Link to='/phase2' activeClassName='route--active'>
      Game 2
    </Link>
    {' · '}
    <Link to='/phase2result' activeClassName='route--active'>
      Result
    </Link>
  </div>
)

export default Header

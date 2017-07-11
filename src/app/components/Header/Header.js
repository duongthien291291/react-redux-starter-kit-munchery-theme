import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className="header">
    <h1>New Ocean Information System</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Attendance
    </IndexLink>
    {' · '}
    <Link to='/game' activeClassName='route--active'>
      Game
    </Link>
  </div>
)

export default Header

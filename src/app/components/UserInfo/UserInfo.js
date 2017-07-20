import React from 'react'
import {IndexLink, Link} from 'react-router'
import { connect } from 'react-redux'
import './UserInfo.scss'

export const UserInfo = (props) => (
  <div className="user-info">
    <h1>User Informations</h1>
    {/*<div>This is user info</div>*/}
    <div>{props.user.name}</div>
  </div>
)

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
    user : state.app.user
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)

import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router'
import { connect } from 'react-redux'
import './Phase2UserInfo.scss'

class Phase2UserInfo extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className="user-info">
        <h1>New Ocean Information System</h1>
        <div>This is user info</div>
        <div>{props.user.name}</div>
      </div>
    );
  }
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
    users : state.app.phase2Users
})

export default connect(mapStateToProps, mapDispatchToProps)(Phase2UserInfo)

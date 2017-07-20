import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router'
import {connect} from 'react-redux'
import './Phase2UserInfo.scss'

class Phase2UserInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let userInfo = this.props.users.map((obj, index) => {
      return (
        <div key={`userinfo-${index}`}>
          <h1>User Informations</h1>
          {/*<div>This is user info</div>*/}
          <div>{obj.name}</div>
        </div>
      )
    });

    return (
      <div className="user-info">
        {userInfo}
      </div>
    );
  }
}

const mapDispatchToProps = {}

const mapStateToProps = (state) => {
  return {
    users: state.app.phase2Users,
    // question: state.phase2QuestInfo.question
  }
}
//   ({
//   users: state.app.phase2Users,
//   question: state.phase2QuestInfo.question
// })

export default connect(mapStateToProps, mapDispatchToProps)(Phase2UserInfo)

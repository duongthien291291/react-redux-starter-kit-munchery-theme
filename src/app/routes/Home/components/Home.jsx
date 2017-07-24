import React from 'react'
import {browserHistory} from 'react-router'
import ThreeComponent from '../../../components/ThreeComponent'
import '../assets/style.scss'


class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  updateInfo = (user) => {
    this.props.updateUserInfo(user);
  }

  goTo = (index) => {
    browserHistory.push('/phase1');
  }

  render() {
    return (
      <div>
        <ThreeComponent {...this.props} xCoordinate={-700} yCoordinate={660} updateInfo={this.updateInfo} goTo={this.goTo} listObject={this.props.users}></ThreeComponent>
      </div>
    )
  }
}

export default Home

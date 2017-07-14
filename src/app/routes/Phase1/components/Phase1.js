import React from 'react'
import {browserHistory} from 'react-router'
import UserInfo from '../../../components/UserInfo'
import '../assets/style.scss'


class Phase1 extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="content-page">
          {this.props.children}
        </div>
        <UserInfo></UserInfo>
      </div>
    )
  }
}

export default Phase1

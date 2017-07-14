import React from 'react'
import {browserHistory} from 'react-router'
import Phase2UserInfo from '../../../components/Phase2UserInfo'
import '../assets/style.scss'


class Phase2 extends React.Component {
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
        <Phase2UserInfo></Phase2UserInfo>
      </div>
    )
  }
}

export default Phase2

import React from 'react'
import {browserHistory} from 'react-router'
import ThreeComponent from '../../../components/ThreeComponent'
var Barcode = require('react-barcode');

class Phase2Users extends React.Component {
  constructor(props) {
    super(props)
  }

  updateInfo = (user) => {
    this.props.updateUserInfo(user);
  }

  goTo = (index) => {
    browserHistory.push('/phase2/quests');
  }

  back = () => {
    browserHistory.push('/');
  }

  render() {
    return (
      <div>

        <ThreeComponent {...this.props}
                        xCoordinate={-660}
                        yCoordinate={660}
                        updateInfo={this.updateInfo}
                        goTo={this.goTo}
                        listObject={this.props.users}>

        </ThreeComponent>

        <div className="back">
          <button onClick={() => this.back()}>Back</button>
          <div className="btn-barcode">
            <Barcode value={'back'}
                     width={1}
                     height={50}
                     displayValue={false}
                     background='#ecf0f5'/>
          </div>
        </div>
      </div>
    )
  }
}

export default Phase2Users

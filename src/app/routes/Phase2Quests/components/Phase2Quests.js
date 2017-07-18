import React from 'react'
import {browserHistory} from 'react-router'
import ThreeComponent from '../../../components/ThreeComponent'
var Barcode = require('react-barcode');

class Phase2Quests extends React.Component {
  constructor(props) {
    super(props)
  }

  updateInfo = (user) => {

  }

  goTo = (index) => {
    browserHistory.push('/phase2/quest-info/' + this.props.questions[index].id);
  }

  back = () => {
    browserHistory.push('/phase2');
  }

  render() {
    return (
      <div>

        <ThreeComponent {...this.props}
                        xCoordinate={-660}
                        yCoordinate={660}
                        updateInfo={this.updateInfo}
                        goTo={this.goTo}
                        listObject={this.props.questions}>

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

export default Phase2Quests

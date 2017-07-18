import React from 'react'
import {browserHistory} from 'react-router'
import ThreeComponent from '../../../components/ThreeComponent'
import CheckboxGroupResult from "../../../components/CheckboxGroupResult/CheckboxGroupResult";
var Barcode = require('react-barcode');

class Phase2Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = {width: 1, height: 50, displayValue: false, background: '#ecf0f5'};
  }

  updateInfo = (user) => {

  }

  goTo = (index) => {
    browserHistory.push('/phase2/quests');
  }

  back = () => {
    browserHistory.push('/');
  }

  render() {
    const self = this;
    let usersResult = this.props.users.map((obj, index) => {
      let question = obj.question;
      return (
        <div className="row" key={`usersresult-${index}`}>
          <div className="col-sm-4">{obj.name}</div>
          <div className="col-sm-8">
            {
              <CheckboxGroupResult name="answer"
                             options={question.chooses.map(x => ({
                               label: x.description,
                               value: x.id,
                               checked: question.userAnswers.some((y) => (y == x.id)),
                               answers: question.answers
                             }))}/>
            }
          </div>
        </div>
      )
    });
    return (
      <div>

        {usersResult}

        <div>
          <div>
            <button type="button" onClick={() => this.back()}>Start new round</button>
          </div>
          <div className="btn-barcode">
            <Barcode value={'new'}
                     width={this.state.width}
                     height={this.state.height}
                     displayValue={this.state.displayValue}
                     background={this.state.background}/>
          </div>
        </div>

      </div>
    )
  }
}

export default Phase2Result

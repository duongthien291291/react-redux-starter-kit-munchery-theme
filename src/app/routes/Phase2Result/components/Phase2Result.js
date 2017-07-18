import React from 'react'
import {browserHistory} from 'react-router'
import ThreeComponent from '../../../components/ThreeComponent'
import CheckboxGroupResult from "../../../components/CheckboxGroupResult/CheckboxGroupResult";
var Barcode = require('react-barcode');

class Phase2Result extends React.Component {
  constructor(props) {
    super(props)
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
      let answer = self.props.answers.find((x) => (x.userId == obj.id));
      return (
        <div className="row" key={`usersresult-${index}`}>
          <div className="col-sm-4">{obj.name}</div>
          <div className="col-sm-8">
            {
              <CheckboxGroupResult name="answer"
                             options={answer.question.chooses.map(x => ({
                               label: x.description,
                               value: x.id,
                               checked: answer.userAnswers.some((y) => (y == x.id)),
                               answers: answer.question.answers
                             }))}/>
            }
          </div>
        </div>
      )
    });
    return (
      <div>

        {usersResult}

      </div>
    )
  }
}

export default Phase2Result

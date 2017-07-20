import React from 'react'
import {browserHistory} from 'react-router'
import ThreeComponent from '../../../components/ThreeComponent'
import CheckboxGroupResult from "../../../components/CheckboxGroupResult/CheckboxGroupResult";
var Barcode = require('react-barcode');
import checkUrl from '../assets/check-icon.png'
import errorUrl from '../assets/error-icon.png'

class Phase2Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = {width: 1, height: 50, displayValue: false, background: '#ecf0f5'};
  }

  updateInfo = (user) => {

  }

  goTo = (index) => {
    browserHistory.push('/phase2/');
  }

  render() {
    const self = this;
    let usersResult = this.props.users.map((obj, index) => {
      let question = obj.question;
      const isRightAnswer = ((question.userAnswers.length == question.answers.length)
                            && question.answers.every(x => question.userAnswers.some(y => y == x)));
      let imgUrl = isRightAnswer ? checkUrl : errorUrl;
      return (
        <div className="row" key={`usersresult-${index}`} style={{'borderBottom': '2px solid'}}>
          <div className="col-sm-3">{obj.name}</div>
          <div className="col-sm-8 text-left">
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
          <div className="col-sm-1">
            <img src={imgUrl} style={{'width': '75%'}}/>
          </div>
        </div>
      )
    });
    return (
      <div>

        {usersResult}

        <div style={{'marginTop': '10px'}}>
          <div>
            <button type="button" onClick={() => this.goTo()}>Start new round</button>
          </div>
          {/*<div className="btn-barcode">*/}
            {/*<Barcode value={'new'}*/}
                     {/*width={this.state.width}*/}
                     {/*height={this.state.height}*/}
                     {/*displayValue={this.state.displayValue}*/}
                     {/*background={this.state.background}/>*/}
          {/*</div>*/}
        </div>

      </div>
    )
  }
}

export default Phase2Result

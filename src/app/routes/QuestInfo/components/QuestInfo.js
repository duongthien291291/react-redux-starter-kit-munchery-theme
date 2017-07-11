import React from 'react'
import {browserHistory} from 'react-router'
import QuestForm from './QuestForm'
import TestForm from './TestForm'
import '../assets/style.scss'



class QuestInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmitAnswer = (anwer) => {
    // Do something with the form values
    // this.props.updateUserInfo(user);
    // debugger;
  };

  render() {
    return (
      <div>
        <h1>This is quest info page</h1>
        <h2>{this.props.question.description}</h2>
        <QuestForm onSubmit={this.handleSubmitAnswer} { ...this.props }></QuestForm>
        {/*<TestForm onSubmit={this.handleSubmitAnswer} { ...this.props }></TestForm>*/}
      </div>
    )
  }
}

export default QuestInfo


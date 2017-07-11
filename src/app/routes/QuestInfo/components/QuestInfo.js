import React from 'react'
import {browserHistory} from 'react-router'
import QuestForm from './QuestForm'
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
        <h3 className="text-left">{this.props.question.description}</h3>
        <QuestForm onSubmit={this.handleSubmitAnswer} { ...this.props }></QuestForm>
      </div>
    )
  }
}

export default QuestInfo


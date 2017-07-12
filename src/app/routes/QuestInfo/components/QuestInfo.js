import React from 'react'
import {browserHistory} from 'react-router'
import QuestForm from './QuestForm'
import UserInfoForm from './UserInfoForm'
import {toastr} from 'react-redux-toastr'
import '../assets/style.scss'



class QuestInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmitAnswer = (answer) => {
    // Do something with the form values
    if(this.arraysEqual(answer.answer, this.props.question.answers))
      toastr.success('Congratulations', 'Your answer is right');
    else
      toastr.error('Opp', 'Your answer is not right');
  };

  arraysEqual(arr1, arr2) {
  if(arr1.length !== arr2.length)
    return false;
  for(var i = arr1.length; i--;) {
    if(arr1[i] !== arr2[i])
      return false;
  }

  return true;
}

  render() {
    return (
      <div>
        <h1>This is quest info page</h1>
        <h3 className="text-left">{this.props.question.description}</h3>
        <QuestForm onSubmit={this.handleSubmitAnswer} { ...this.props }></QuestForm>
        {/*<UserInfoForm onSubmit={this.handleSubmitAnswer} { ...this.props }></UserInfoForm>*/}
      </div>
    )
  }
}

export default QuestInfo


import React from 'react'
import {browserHistory} from 'react-router'
import Phase2QuestForm from './Phase2QuestForm'
import {toastr} from 'react-redux-toastr'
import '../assets/style.scss'


class Phase2QuestInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmitAnswer = (answer) => {
    // Do something with the form values
    // if(!answer.answer)
    //   return;
    // if(this.arraysEqual(answer.answer, this.props.question.answers)) {
    //   this.props.addUserToPhase2Users(this.props.user.id);
    //   toastr.success('Congratulations', 'Your answer is right');
    // }
    // else
    //   toastr.error('Opp', 'Your answer is not right');
    //
    // this.props.finishedPhase1Question(this.props.question.id);
    let answerObj = {
      userAnswers: answer.answer,
      question: this.props.question,
      userId: this.props.user.id
    };
    this.props.addAnswerToPhase2Answers(answerObj);
  };

  arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
      return false;
    for (var i = arr1.length; i--;) {
      if (arr1[i] !== arr2[i])
        return false;
    }

    return true;
  }

  render() {
    return (
      <div>
        <h1>This is quest info page</h1>
        <h3 className="text-left">{this.props.question.description}</h3>
        <Phase2QuestForm onSubmit={this.handleSubmitAnswer} { ...this.props }></Phase2QuestForm>
      </div>
    )
  }
}

export default Phase2QuestInfo


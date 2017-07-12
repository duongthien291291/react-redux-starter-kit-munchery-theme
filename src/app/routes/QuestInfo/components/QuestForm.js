import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, change as changeFieldValue, formValueSelector} from 'redux-form'
import CheckboxGroup from './CheckboxGroup'
import RadioGroup from './RadioGroup'
var Barcode = require('react-barcode');
import {browserHistory} from 'react-router'
import './QuestForm.scss'

let strs = '';
let time = new Date();

const validate = (values, state) => {
  const errors = {};
  // errors.answer = true;
  // if(values.answer){
  //   values.answer.forEach((obj) => {
  //     if(values.answer.length != state.question.answers.length || state.question.answers.indexOf(obj) < 0)
  //       errors.answer = true;
  //   });
  // }

  return errors
};

const warn = values => {
  const warnings = {};
  // if (values.age < 19) {
  //   warnings.age = 'Hmm, you seem a bit young...'
  // }
  warnings.answer = true;
  return warnings
};

class QuestForm extends Component {
  constructor(props) {
    super(props)
    this.state = {width: 1, height: 50, displayValue: false, background: '#ecf0f5'};
  }

  componentDidMount() {
    let self = this;
    self.listenerTemp = (e) => self.keyDown(e, self.props);
    document.addEventListener("keydown", this.listenerTemp, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.listenerTemp, false);
  }

  keyDown(e, props) {
    var keyCode = e.keyCode;
    var currentTime = new Date();
    var timeSpand = currentTime - time;
    time = currentTime;
    // console.log(timeSpand);
    if (!strs && keyCode != 13)
      strs += e.key;
    else if (keyCode != 13 && timeSpand < 30)
      strs += e.key;
    else if (keyCode != 13 && timeSpand >= 30) {
      strs = '';
      strs += e.key;
    }
    else if (strs && keyCode == 13 && timeSpand < 30) {
      if (strs.match(/\d+/)) {
        var num = parseInt(strs.match(/\d+/)[0]);
        let array = [];
        if (props.chooseAnswers && props.chooseAnswers.length > 0) {
          array = props.chooseAnswers.filter((obj) => obj);
        }

        if (props.question.answers.length == 1) {
          if (array.indexOf(num) < 0) {
            array.splice(0, 1)
            array.push(num);
          }
          else {
            array.splice(array.indexOf(num), 1);
          }
          props.dispatch(changeFieldValue('QuestForm', 'answer', array));
        }
        else {
          if (array.indexOf(num) < 0) {
            array.push(num);
          }
          else {
            array.splice(array.indexOf(num), 1);
          }

          props.dispatch(changeFieldValue('QuestForm', 'answer', array));
        }
      }
      else {
        if (strs == 'submit') {
          const submitter = props.handleSubmit(props.onSubmit)
          submitter() // submits
        } else if (strs == 'clear') {
          props.reset();
        } else if (strs == 'back') {
          browserHistory.push('/game');
        }
      }

    }
  }

  back() {
    browserHistory.push('/game');
    // this.props.dispatch(changeFieldValue('QuestForm', 'answer', [1, 2]));
  }

  renderField = ({input, label, type, placeholder, required, allowEdit, meta: {touched, error, warning, pristine}}) => (
    <div>
      <label>
        <input {...input} type={type}/>
        {label}
      </label>
    </div>
  );

  //redux form
  render() {
    const {handleSubmit, userProfile, pristine, reset, submitting} = this.props;
    return (
      <form className="edit_user" ref="form"
            acceptCharset="UTF-8" onSubmit={handleSubmit}>

        <div className="form-body">
          <div className="row">
            {
              this.props.question.answers.length == 1 ?
                (
                  <RadioGroup name="answer"
                              options={this.props.question.chooses.map(obj => ({
                                label: obj.description,
                                value: obj.id,
                                answers: this.props.question.answers
                              }))}/>
                )
                :
                (
                  <CheckboxGroup name="answer"
                                 options={this.props.question.chooses.map(obj => ({
                                   label: obj.description,
                                   value: obj.id,
                                   answers: this.props.question.answers
                                 }))}/>
                )
            }
          </div>

          <div className="form-buttons row">
            <div className="col-sm-4 text-center">
              <div>
                <button type="submit" disabled={submitting}>Submit</button>
              </div>
              <div className="btn-barcode">
                <Barcode value={'submit'}
                         width={this.state.width}
                         height={this.state.height}
                         displayValue={this.state.displayValue}
                         background={this.state.background}/>
              </div>
            </div>

            <div className="col-sm-4 text-center">
              <div>
                <button type="button" disabled={submitting} onClick={reset}>Clear Values</button>
              </div>
              <div className="btn-barcode">
                <Barcode value={'clear'}
                         width={this.state.width}
                         height={this.state.height}
                         displayValue={this.state.displayValue}
                         background={this.state.background}/>
              </div>
            </div>

            <div className="col-sm-4 text-center">
              <div>
                <button type="button" onClick={() => this.back()}>Back</button>
              </div>
              <div className="btn-barcode">
                <Barcode value={'back'}
                         width={this.state.width}
                         height={this.state.height}
                         displayValue={this.state.displayValue}
                         background={this.state.background}/>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapFormToProps = {
  form: 'QuestForm',     // a unique name for this form
  validate,                 // <--- validation function given to redux-form
  warn,                     // <--- warning function given to redux-form,
  // enableReinitialize: true //when async init data from remote, we have to enableReinitialize --> to redux form set value for field
};

// Decorate the form component
QuestForm = reduxForm(
  mapFormToProps
)(QuestForm);

const selector = formValueSelector('QuestForm');

QuestForm = connect(
  (state, props) => {
    return {
      chooseAnswers: selector(state, 'answer'),
      initialValues: {
        // chooseAnswers: state.form.QuestForm ? state.form.QuestForm.values.answer : [],
        // answer: props.chooseAnswers
      } // pull initial values from account reducer
    };
  }
)(QuestForm);

export default QuestForm;

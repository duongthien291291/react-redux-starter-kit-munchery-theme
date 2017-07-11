import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, change as changeFieldValue, formValueSelector} from 'redux-form'
import CheckboxGroup from './CheckboxGroup'
import RadioGroup from './RadioGroup'
var Barcode = require('react-barcode');
import './QuestForm.scss'

let strs = '';
let time = new Date();

const validate = (values, state) => {
  const errors = {};
  // errors.answer = true;
  return errors
};

const warn = values => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
};

class TestForm extends Component {

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
      <form className="edit_user"
            acceptCharset="UTF-8" onSubmit={handleSubmit}>

        <div className="form-body">

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
                                 value: obj.id
                               }))}/>
              )
          }

          <div className="form-buttons">
            <button type="submit" disabled={pristine || submitting}>Submit</button>
            <button type="button" disabled={submitting} onClick={reset}>Clear Values</button>
          </div>
        </div>
      </form>
    );
  }
}

const mapFormToProps = {
  form: 'TestForm',     // a unique name for this form
  validate,                 // <--- validation function given to redux-form
  warn,                     // <--- warning function given to redux-form,
  enableReinitialize: true //when async init data from remote, we have to enableReinitialize --> to redux form set value for field
};

// Decorate the form component
TestForm = reduxForm(
  mapFormToProps
)(TestForm);



TestForm = connect(
  (state, props) => {
    return {
      initialValues: {
      } // pull initial values from account reducer
    };
  }
)(TestForm);

export default TestForm;

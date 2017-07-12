import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, change as changeFieldValue, formValueSelector} from 'redux-form'

const validate = values => {
  const errors = {};

  return errors
};

const warn = values => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
};

class UserInfoForm extends Component {

  renderField = ({input, label, type, placeholder, required, allowEdit, meta: {touched, error, warning, pristine}}) => (
    <fieldset className="field wide">
      <label>{label}</label><br/>
      <input {...input} type={type} placeholder={placeholder} disabled={!allowEdit}/>
      {touched && ((error && <div className="error-text">{error}</div>) || (warning &&
      <div className='text-warning'>{warning}</div>))}
    </fieldset>
  );

  //redux form
  render() {
    const { handleSubmit, pristine, reset, submitting} = this.props;
    let userInfoFailedMessage = !pristine  ? (
      <label className='error-text' style={{textAlign: 'center'}}>userInfoErrorMessage</label>) : '';
    return (
      <form className="edit_user"
            acceptCharset="UTF-8" onSubmit={handleSubmit}>
        <h4 className="form-title">Title</h4>

        {this.props.firstName}
        <div className="form-body">
          <div>
            <Field name="firstName" type="text" component={this.renderField} label='First name' allowEdit={true}
                   placeholder='First name'/>


          </div>

          <div>{userInfoFailedMessage}</div>

          <div className="form-buttons">
            <button type="submit" className="large orange button"
                    data-disable-with="Updating Profile..." >Update
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapFormToProps = {
  form: 'UserInfoForm',     // a unique name for this form
  validate,                 // <--- validation function given to redux-form
  warn,                     // <--- warning function given to redux-form,
  enableReinitialize: true //when async init data from remote, we have to enableReinitialize --> to redux form set value for field
};

// Decorate the form component
UserInfoForm = reduxForm(
  mapFormToProps
)(UserInfoForm);

const selector = formValueSelector('UserInfoForm');

UserInfoForm = connect(
  (state, props) => {
    if(state.form.UserInfoForm)
      console.log('normal', state.form.UserInfoForm.values.firstName)
    console.log('selector', selector(state, 'firstName'));
    return {
      firstName: selector(state, 'firstName'),
      initialValues: {
        // chooseAnswers: selector(state, 'answer')
      } // pull initial values from account reducer
    };
  }
)(UserInfoForm);

export default UserInfoForm;

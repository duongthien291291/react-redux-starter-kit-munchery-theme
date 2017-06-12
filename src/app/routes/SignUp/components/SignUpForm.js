import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router'
import {createStore, combineReducers} from 'redux'
import {Field, reduxForm} from 'redux-form'
import {browserHistory} from 'react-router'
import './SignUpForm.scss'

const validate = values => {
  const errors = {};
  let userName = values.userName;
  let password = values.password;
  let confirmPassword = values.confirmPassword;
  if (!userName) {
    errors.userName = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userName)) {
    errors.userName = 'Invalid email address';
  }

  if (!password) {
    errors.password = 'Required';
  } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
    errors.password = (<p>Invalid email password. The password must: <br/>
      Contain at from 6 to 16 characters.<br/>
      Contain at least 1 number.<br/>
      Contain at least 1 lowercase character.<br/>
      Contain at least 1 uppercase character.<br/>
      Contain at least 1 special character !@#$%^&*
    </p>);
  }
  //else if (values.confirmPassword && values.confirmPassword.length > 0
  //  && /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.confirmPassword)
  //  && values.password != values.confirmPassword){
  //  errors.password = 'Password and confirm password are not match';
  //}

  if (!confirmPassword) {
    errors.confirmPassword = 'Required';
  } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(confirmPassword)) {
    errors.confirmPassword = (<p>Invalid email confirm password. The password must: <br/>
      Contain at from 6 to 16 characters.<br/>
      Contain at least 1 number.<br/>
      Contain at least 1 lowercase character.<br/>
      Contain at least 1 uppercase character.<br/>
      Contain at least 1 special character !@#$%^&*
    </p>);
  } else if (password != confirmPassword) {
    errors.confirmPassword = 'Password and confirm password are not match';
  }
  return errors
};

const warn = values => {
  const warnings = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
};

class SignUpForm extends Component {
  renderField = ({input, type, placeholder, meta: {touched, error, warning, pristine}}) => (
    <fieldset>
      <input {...input} type={type} placeholder={placeholder} style={{width: '100%'}}/>
      {touched && ((error && <div className="error">{error}</div>) || (warning &&
      <div className="warning">{warning}</div>))}
    </fieldset>
  );

  //redux form
  render() {
    const {handleSubmit, signUp, pristine, reset, submitting} = this.props;
    let signUpFailedMessage = !pristine && signUp.signUpErrorMessage ? (
      <label className='error' style={{textAlign: 'center'}}>{signUp.signUpErrorMessage}</label>) : '';
    return (
      <form className="new_user ng-pristine ng-valid" onSubmit={handleSubmit}>
        <Field name="userName" type="email" component={this.renderField}
               placeholder="Your email address"/>

        <Field name="password" type="password" component={this.renderField}
               placeholder="Enter secure password"/>

        <Field name="confirmPassword" type="password" component={this.renderField}
               placeholder="Confirm secure password"/>

        <div>{signUpFailedMessage}</div>
        <input type="submit" name="commit" value="Sign Up" id="signup_button"
               className="large orange button" data-disable-with="Creating Account..." disabled={signUp.isRunning}/>

        <p className="tos">Have an account?
          <Link to='/signin'>Log in</Link>
        </p>

      </form>
    );
  }
}

// Decorate the form component
SignUpForm = reduxForm({
  form: 'SignUpForm', // a unique name for this form
  validate,                // <--- validation function given to redux-form
  warn                     // <--- warning function given to redux-form
})(SignUpForm);

export default SignUpForm;

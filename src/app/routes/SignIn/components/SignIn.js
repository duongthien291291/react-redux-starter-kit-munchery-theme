import React from 'react'
import PropTypes from 'prop-types'
import {IndexLink, Link} from 'react-router'
import SignInForm from './SignInForm'
import '../assets/style.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = (user) => {
    // Do something with the form values
    this.props.signIn(user);
  };

  render() {
    return (
      <div className="signin-form fluid-container">
        <div className="fluid-container">
          <div className="row center-x">
            <div className="signup-stage phone-col-12 tablet-col-12 desktop-col-8">
              <div className="signin-view">
                <div className="signin-content">
                  <h3>Log In To Your Account</h3>

                  <div className="social-signin">
                    <div className="auth_provider field">
                      <Link to='/signin' className='popup facebook-popup facebook button'>
                        <span>Facebook Log In</span>
                      </Link>
                    </div>

                    <div className="auth_provider field">
                      <Link to='/signin' className='popup twitter-popup twitter button'>
                        <span>Twitter Log In</span>
                      </Link>
                    </div>
                  </div>

                  <div className="email-signin">

                    <div className="divider">
                      <div className="label">OR</div>
                    </div>

                    <SignInForm onSubmit={this.handleSubmit} signIn={this.props.signin}/>

                  </div>

                  <div className="signup">Don't have an account? <Link to='/signup'>Sign Up</Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  //signin: PropTypes.object.isRequired
}

export default SignIn

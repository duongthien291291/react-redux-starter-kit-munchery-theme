import React from 'react'
import PropTypes from 'prop-types'
import SignUpForm from './SignUpForm'
import {IndexLink, Link} from 'react-router'
import '../assets/style.scss'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit = (user) => {
    // Do something with the form values
    //this.props.signUp(user);
    this.props.signUp(user);
  };

  render() {
    return (
      <div className="fluid-container">
        <div className="row center-x">
          <div className="signup-stage phone-col-12 tablet-col-12 desktop-col-10">
            <div className="signup-view">
              <div className="signup-content">

                <div className="signup-content-section large">
                  <div className="facebook-sign-up">
                    <button id="facebook_signup_button" className="facebook button large">Facebook Sign Up</button>
                    <p>No auto posting, ever.</p>
                  </div>
                  <div className="divider">OR</div>

                  {/*<form className="new_user ng-pristine ng-valid">*/}
                  {/*<div>*/}
                  {/*<input placeholder="Email" autoComplete="off" type="email" name="user[email]" id="user_email"/>*/}
                  {/*<div id="email-suggestion" className="email-suggestion"></div>*/}

                  {/*<div className="password-label-container">*/}
                  {/*<label>Password (minimum 8 characters)</label>*/}
                  {/*</div>*/}
                  {/*<input className="strong-password" autoComplete="off"*/}
                  {/*placeholder="Password (minimum 8 characters)" type="password" name="user[password]"*/}
                  {/*id="user_password"/>*/}

                  {/*</div>*/}

                  {/*<input type="submit" name="commit" value="Sign Up" id="signup_button"*/}
                  {/*className="large orange button" data-disable-with="Creating Account..."/>*/}

                  {/*<p className="tos">Have an account?*/}
                  {/*<Link to='/signin'>Log in</Link>*/}
                  {/*</p>*/}

                  {/*</form>*/}

                  <SignUpForm onSubmit={this.handleSubmit} signUp={this.props.signup}/>

                </div>

                <div className="signup-content-section small">
                  <div className="signup-message">
                    <h3>Get Fresh, Chef-Made Meals Delivered</h3>
                    <ul className="bullets">
                      <li>Ever-changing daily menus</li>
                      <li>Local chefs use nourishing, seasonal ingredients</li>
                      <li>Dishes are chilled for maximum freshness</li>
                      <li>Heat and dinner’s ready when you are</li>
                      <li>On-demand or scheduled delivery</li>
                    </ul>
                  </div>
                  <p>Have an account?
                    <Link to='/signin'>Log in</Link>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  //signup: PropTypes.number.isRequired,
  //doubleAsync: PropTypes.func.isRequired,
  //increment: PropTypes.func.isRequired
}

export default SignUp

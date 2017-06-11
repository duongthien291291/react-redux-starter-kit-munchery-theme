import React from 'react'
import PropTypes from 'prop-types'
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
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <div className="login-wrapp">
                <div className="logreg-contain">
                  <div className="custom-tabs" data-effect-in="flipInX">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="active">
                        <a href="#tab1" data-toggle="tab">Login</a>
                      </li>
                      <li>
                        <a href="#tab2" data-toggle="tab">Use social media</a>
                      </li>
                    </ul>

                    {/*<!-- Tab panes -->*/}
                    <div className="tab-content">
                      <div className="tab-pane fade in active" id="tab1">

                        <SignInForm onSubmit={this.handleSubmit} signIn={this.props.signin} />

                      </div>
                      <div className="tab-pane fade" id="tab2">
                        <div className="row">
                          <div className="col-md-12 text-center">
                            <h5>Login with social media account</h5>

                            <p><a href="#" className="btn btn-facebook btn-icon btn-block">Signup with facebook <i
                              className="fa fa-facebook"></i></a></p>

                            <p><a href="#" className="btn btn-twitter btn-icon btn-block">Signup with twitter <i
                              className="fa fa-twitter"></i></a></p>

                            <p><a href="#" className="btn btn-instagram btn-icon btn-block">Signup with instagram <i
                              className="fa fa-instagram"></i></a></p>
                          </div>
                        </div>
                      </div>
                    </div>
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

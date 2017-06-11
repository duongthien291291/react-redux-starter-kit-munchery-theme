import React from 'react'
import './MuncheryHeader.scss'

class MuncheryHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render(){
    return (
      <div>
        <nav className={"phone-nav" + (this.state.open ? ' onscreen' : '')}>
          <section>

            <ul className="secondary">
              <li><a href="/users/login/">Log In</a></li>
            </ul>


            <h3>Order On The Go</h3>
            <ul>
              <li className="download">
                <a className="ios"
                   href="http://mnch.me/a/110101738656125502?channel=interstitial&amp;data=eyJyZWZlcnJlcl92YWxpZCI6ZmFsc2UsInJlZmVycmVyX2Vycm9yIjoiU29ycnksIHRoYXQgaW52aXRlIGNvZGUgY2Fubm90IGJlIHVzZWQuIiwicmVmZXJyZXJfY29kZSI6bnVsbCwicmVmZXJyZXJfbmFtZSI6IllvdXIgRnJpZW5kIiwicmVmZXJyZXJfY3JlZGl0IjoiJDIwIiwiaW52aXRlcl9jcmVkaXQiOjIwLCJyZWZlcnJlZV9jcmVkaXQiOiIkMjAiLCJpbnZpdGVlX2NyZWRpdCI6MjAsInJlZmVycmVyX3Rva2VuIjoiYW5vbi1iYWZiYWJhYjZlMmUwMjdhYmIwN2U3ZGFkYTlkNjJkMCIsInQiOm51bGwsImEiOm51bGwsImQiOm51bGx9">Download
                  for <strong>iPhone</strong></a>
              </li>
              <li className="download">
                <a className="android"
                   href="http://mnch.me/a/110101738656125502?channel=interstitial&amp;data=eyJyZWZlcnJlcl92YWxpZCI6ZmFsc2UsInJlZmVycmVyX2Vycm9yIjoiU29ycnksIHRoYXQgaW52aXRlIGNvZGUgY2Fubm90IGJlIHVzZWQuIiwicmVmZXJyZXJfY29kZSI6bnVsbCwicmVmZXJyZXJfbmFtZSI6IllvdXIgRnJpZW5kIiwicmVmZXJyZXJfY3JlZGl0IjoiJDIwIiwiaW52aXRlcl9jcmVkaXQiOjIwLCJyZWZlcnJlZV9jcmVkaXQiOiIkMjAiLCJpbnZpdGVlX2NyZWRpdCI6MjAsInJlZmVycmVyX3Rva2VuIjoiYW5vbi1iYWZiYWJhYjZlMmUwMjdhYmIwN2U3ZGFkYTlkNjJkMCIsInQiOm51bGwsImEiOm51bGwsImQiOm51bGx9">Download
                  for <strong>Android</strong></a>
              </li>
            </ul>
          </section>
        </nav>

        <div className="header-container">
          <nav className="desktop-nav ">
            <div className="fluid-container full-width">
              <div className="row">
                <a href="/" className="logo-container"></a>

                <ul className="rag-right nav-links">


                  <li><a href="" id="login_button" className="show-signin-form" data-return-url="">Log In</a></li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="hamburger-nav-container">
            <nav className="hamburger-nav" onClick={() => this.setState({open: !this.state.open})}></nav>
            <a href="/" className="clickable-area"></a>
          </div>
        </div>
      </div>
    );
  }
}

export default MuncheryHeader

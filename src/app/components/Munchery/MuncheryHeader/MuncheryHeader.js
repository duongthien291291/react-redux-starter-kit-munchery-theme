import React from 'react'
import {IndexLink, Link} from 'react-router'
import {connect} from 'react-redux'
import {signOut} from './MuncheryHeaderReducer'
import './MuncheryHeader.scss'

class MuncheryHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {openLeftMenu: false, openUserProfile: false};
  }

  render() {
    let userInfo = this.props.hasSignIn && (
        <div className="user-info">
          <a className="name bold"
             href="/users/profile/">{this.props.userInfo.firstName + ' ' + this.props.userInfo.lastName}</a>
          <a className="email" href="/users/profile/">{this.props.userInfo.email}</a>
        </div>
      );

    let login = !this.props.hasSignIn && (
        <li>
          <Link to='/signin'>Log In</Link>
        </li>
      );

    let menuMobile = this.props.hasSignIn && (
        <ul className="primary">
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/' className="hiw-link">How It Works</Link></li>
        </ul>
      );

    let menuDestop = this.props.hasSignIn && (
        <ul className="rag-left nav-links">
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/' className="hiw-link">How It Works</Link></li>
        </ul>
      );

    let userProfileMobile = (
      <ul className="secondary">
        {this.props.hasSignIn && (
        <li>
          <a href="/users/invoices/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <title>orders</title>
              <defs>
                <path id="a" d="M1.6 1.6h12.8v12.8l-1.6-.8-1.6.8-1.6-.8-1.6.8-1.6-.8-1.6.8-1.6-.8-1.6.8z"></path>
                <mask id="b" x="0" y="0" width="12.8" height="12.8" fill="#fff">
                  <use href="#a"></use>
                </mask>
              </defs>
              <g fill="none" fillRule="evenodd">
                <use stroke="#F27242" mask="url(#b)" strokeWidth="3" href="#a"></use>
                <path d="M0 0h16v16H0z"></path>
                <path fill="#F27242" d="M4.8 4.8h4.8v1.5H4.8zm0 3.2h6.4v1.5H4.8z"></path>
              </g>
            </svg>
            Order History
          </a>
        </li>
        )}
        {/*<!-- end regulars link -->*/}

        {this.props.hasSignIn && (
        <li>
          <a href="/users/profile/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><title>
              settings</title>
              <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <g stroke="#F27242" strokeWidth="1.5">
                  <path d="M10.738 7.956a2.844 2.844 0 1 1-5.688 0 2.844 2.844 0 0 1 5.688 0z"></path>
                  <path
                    d="M10.727 3.283l.62-.44a1.057 1.057 0 0 1 1.327.118l.127.13c.338.345.397.943.116 1.357l-.431.635c.285.476.5 1.001.631 1.56l.744.137c.472.087.856.554.856 1.033v.205c0 .483-.388.946-.856 1.033l-.744.137a5.46 5.46 0 0 1-.632 1.56l.431.635c.275.404.223 1.01-.115 1.358l-.127.13a1.061 1.061 0 0 1-1.326.118l-.62-.44c-.467.29-.98.511-1.526.645l-.137.78a1.071 1.071 0 0 1-1.017.857h-.18c-.477 0-.932-.38-1.016-.857l-.137-.78a5.206 5.206 0 0 1-1.523-.646l-.622.441c-.395.28-.988.228-1.327-.119l-.127-.13A1.11 1.11 0 0 1 3 11.384l.431-.635a5.48 5.48 0 0 1-.632-1.56l-.743-.137c-.473-.087-.856-.554-.856-1.033v-.205c0-.483.387-.946.856-1.033l.743-.137a5.46 5.46 0 0 1 .633-1.56L3 4.448c-.275-.404-.223-1.011.115-1.358l.127-.13a1.062 1.062 0 0 1 1.327-.118l.62.441a5.204 5.204 0 0 1 1.525-.646l.137-.78A1.07 1.07 0 0 1 7.87 1h.179c.478 0 .933.38 1.017.857l.137.78a5.206 5.206 0 0 1 1.525.646z"
                    strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
              </g>
            </svg>
            Account Settings
          </a></li>
        )}

        {this.props.hasSignIn && (
        <li>
          <a rel="nofollow" data-method="delete" href='javascript:void(0);' onClick={() => this.props.signOut()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><title>
              logout</title>
              <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z"></path>
                <path stroke="#F27242" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      d="M7 2h6v11.014H7M2.5 7.5h7M4.128 5.027L1.827 7.469l2.227 2.58"></path>
              </g>
            </svg>
            Log Out
          </a></li>
        )}

        {login}
      </ul>
    );

    let userProfileDestop = (
      <ul className="rag-right nav-links">
        {/*profile*/}
        {this.props.hasSignIn && (
        <li className={'account user-account-dropdown-button' + (this.state.openUserProfile ? ' open' : '')}>
          <a href="javascript:void(0);" className="profile-dropdown-button"
             onClick={() => this.setState({...this.state, openUserProfile: !this.state.openUserProfile})}>
            <div className="profile-image">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px"
                   viewBox="0 0 11 12" style={{enableBackground: 'new 0 0 11 12'}}>
                <g>
                  <path className="st0"
                        d="M11,7.8c-0.1-1.3-1.1-2.3-2.4-1.7C7.5,6.7,7.5,8.2,5.5,8.2c-2.1,0-2-1.5-3.1-2.1C1.1,5.6,0.1,6.6,0,7.8   c0,1-0.1,2.9,0.9,3.4C2.2,11.9,4.1,12,5.5,12c1.4,0,3.3-0.1,4.6-0.7C11.1,10.8,11,8.8,11,7.8z"></path>
                  <ellipse className="st0" cx="5.5" cy="3.2" rx="3.2" ry="3.2"></ellipse>
                </g>
              </svg>

            </div>
            Account
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 18" className="dropdown-caret">
              <path
                d="M16.5 18c-.4 0-.8-.1-1.1-.4l-15-15C-.1 2-.1 1 .4.4 1-.1 2-.1 2.6.4l13.9 13.9L30.4.4c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-15 15c-.2.4-.6.5-1 .5z"></path>
            </svg>

          </a>

          <div className="profile-dropdown notched-dropdown">
            <div className="dropdown-notch"></div>
            {userInfo}

            <div className="account-options">
              <ul>

                <li>
                  <a href="/users/invoices/">
                    <img alt="Munchery Order History"
                         src="https://assets0.munchery.com/assets/nav/order_icon-172c4585eac8da02f3ff3fb0a0b112ac7468ced8528493b2934d6722a81cf684.svg"/>
                    Order History
                  </a>
                </li>

                {/*<!-- end regulars link -->*/}

                <li>
                  <a href="/users/profile/">
                    <img alt="Account Settings"
                         src="https://assets2.munchery.com/assets/nav/settings_icon-1c8491847cef93644c74f039e4c6341edc3446bcf4da308d51637b8df22736e9.svg"/>
                    Account Settings
                  </a>
                </li>

                <li>
                  <a rel="nofollow" data-method="delete" href='javascript:void(0);'
                     onClick={() => this.props.signOut()}>
                    <img alt="Log Out"
                         src="https://assets1.munchery.com/assets/nav/logout_icon-fd4e45bf731afc46014f658673c5cb5ea18ff95586ef87bbf182e1ef39a75286.svg"/>
                    Log Out
                  </a>
                </li>

              </ul>
            </div>
          </div>
          {/*<!-- End profile dropdown -->*/}
        </li>
        )}

        {/*login*/}
        {login}
      </ul>
    );

    return (
      <div>
        <nav className={"phone-nav" + (this.state.openLeftMenu ? ' onscreen' : '')}>
          <section>
            {/*profile*/}
            <div className="user-container">
              {userInfo}
            </div>

            {/*menu*/}
            {menuMobile}

            {/*userProfile*/}
            {userProfileMobile}


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

                {/*menu*/}
                {menuDestop}

                {/*userProfile*/}
                {userProfileDestop}
              </div>
            </div>
          </nav>

          <div className="hamburger-nav-container">
            <nav className="hamburger-nav"
                 onClick={() => this.setState({...this.state, openLeftMenu: !this.state.openLeftMenu})}></nav>
            <a href="/" className="clickable-area"></a>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  signOut: () => signOut()
}

function mapStateToProps(state) {
  return {
    navigation: state.navigation,
    hasSignIn: !!state.app.acceptToken,
    userInfo: state.app.userData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MuncheryHeader)

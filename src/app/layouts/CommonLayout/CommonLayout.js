import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/core.scss'
import './CommonLayout.scss'
import '../../styles/_menu_page.scss'

class CommonLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {open: false};
  }

  render() {
    return (
      <div className="menu-page env-production logged_in new_customer  ng-scope mouse" data-remote-ip="113.161.71.173"
           data-forwarded-for="113.161.71.173, 113.161.71.173" data-host="ip-172-31-30-15"
           data-user="1444914" data-fb-app-id="169951919734897" data-time-at-load="1496971207272"
           style={{left: '0px', right: '0px'}}>
        <div className="dialog-mask modal clickable"></div>

        <nav className="phone-nav">
          <section>
            <div className="user-container">
              <div className="user-info">
                <a className="name bold" href="/users/profile/">Kevin Hoang</a>
                <a className="email" href="/users/profile/">internet.user2016@gmail.com</a>
              </div>
            </div>


            <ul className="address">
              <li>
                <div className="address-picker no-hover-state">
                  <div className="address-or-zip-code ">
                    7655 Sunset Boulevard
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 18" className="dropdown-caret">
                    <path
                      d="M16.5 18c-.4 0-.8-.1-1.1-.4l-15-15C-.1 2-.1 1 .4.4 1-.1 2-.1 2.6.4l13.9 13.9L30.4.4c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-15 15c-.2.4-.6.5-1 .5z"></path>
                  </svg>


                  <div className="address-picker-dropdown">
                    <ul className="dropdown-menu notched-dropdown">
                      <div className="dropdown-notch"></div>

                      <li className="header">
                        <span>You have no recent addresses.</span>
                      </li>

                      <li className="footer zip-quick-entry">
                        <form className="zip-form ng-pristine ng-valid">
                          <input type="text" name="zipcode" maxLength="5" placeholder="ZIP Code" value=""/>
                          <button className="submit-zip orange">Change Zip</button>
                          <p className="errors">

                            {/*<!-- ngSwitchWhen: unserviceable_zip -->*/}

                            {/*<!-- ngSwitchWhen: cart_error -->*/}

                            {/*<!-- ngSwitchWhen: invalid_zip_code -->*/}
                          </p>

                          <a className="manage-address-book" href="/users/addresses/">View Address Book</a>
                        </form>
                      </li>
                    </ul>
                  </div>
                </div>

              </li>
            </ul>

            <ul className="primary">
              <li><a href="/menus/">Menu</a></li>
              <li><a className="hiw-link" href="/how-it-works/">How It Works</a></li>
              <li><a className="gifts-link" href="/gifts/">Gifts</a></li>
            </ul>

            <ul className="secondary">
              <li>
                <a className="invite" href="/invite/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
                    {/*<!-- Generator: Sketch 41.2 (35397) - http://www.bohemiancoding.com/sketch -->*/}
                    <title>moneyIcon_orange</title>
                    <desc>Created with Sketch.</desc>
                    <defs>
                      <circle id="path-1" cx="8" cy="8" r="8"></circle>
                      <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0"
                            width="16" height="16" fill="white">
                        <use href="#path-1"></use>
                      </mask>
                    </defs>
                    <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="moneyIcon_orange">
                        <g id="membershipIcon">
                          <g id="Group-2" transform="translate(5.000000, 3.000000)" fill="#F27242">
                            <path
                              d="M2.68640351,10 L3.56359649,10 L3.56359649,9.05701754 C5.32894737,8.9254386 6.17324561,7.96052632 6.17324561,6.74342105 C6.17324561,5.19736842 4.96710526,4.69298246 3.53070175,4.32017544 L3.53070175,1.88596491 C4.21052632,2.00657895 4.57236842,2.40131579 4.92324561,2.93859649 L5.85526316,2.21491228 C5.41666667,1.54605263 4.78070175,0.942982456 3.56359649,0.800438596 L3.56359649,0 L2.68640351,0 L2.68640351,0.778508772 C1.17324561,0.877192982 0.230263158,1.76535088 0.230263158,3.02631579 C0.230263158,4.52850877 1.45833333,4.98903509 2.73026316,5.31798246 L2.73026316,8.01535088 C1.89692982,7.89473684 1.41447368,7.40131579 0.953947368,6.74342105 L0,7.39035088 C0.471491228,8.16885965 1.26096491,8.9254386 2.68640351,9.05701754 L2.68640351,10 Z M3.53070175,5.5372807 C4.375,5.78947368 4.90131579,6.11842105 4.90131579,6.86403509 C4.90131579,7.64254386 4.36403509,7.9495614 3.53070175,8.02631579 L3.53070175,5.5372807 Z M2.73026316,4.10087719 C1.97368421,3.87061404 1.50219298,3.58552632 1.50219298,2.90570175 C1.50219298,2.33552632 1.88596491,1.90789474 2.73026316,1.84210526 L2.73026316,4.10087719 Z"
                              id="$"></path>
                          </g>
                          <use id="Oval" stroke="#F27242" mask="url(#mask-2)" strokeWidth="3" href="#path-1"></use>
                        </g>
                      </g>
                    </g>
                  </svg>
                  Give $20, Get $20
                </a></li>


              <li>
                <a href="/users/invoices/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><title>
                    orders</title>
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
                </a></li>

              {/*<!-- end regulars link -->*/}


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

              <li>
                <a rel="nofollow" data-method="delete" href="/users/logout/">
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
            </ul>

            <h3>Order On The Go</h3>
            <ul>
              <li className="download">
                <a className="ios"
                   href="http://mnch.me/a/110101738656125502?channel=interstitial&amp;data=eyJyZWZlcnJlcl92YWxpZCI6ZmFsc2UsInJlZmVycmVyX2Vycm9yIjoiU29ycnksIHRoYXQgaW52aXRlIGNvZGUgY2Fubm90IGJlIHVzZWQuIiwicmVmZXJyZXJfY29kZSI6bnVsbCwicmVmZXJyZXJfbmFtZSI6IllvdXIgRnJpZW5kIiwicmVmZXJyZXJfY3JlZGl0IjoiJDIwIiwiaW52aXRlcl9jcmVkaXQiOjIwLCJyZWZlcnJlZV9jcmVkaXQiOiIkMjAiLCJpbnZpdGVlX2NyZWRpdCI6MjAsInJlZmVycmVyX3Rva2VuIjoiOUU1MTYxQUZDOTE1QTBDIiwidCI6bnVsbCwiYSI6bnVsbCwiZCI6bnVsbH0%3D">Download
                  for <strong>iPhone</strong></a>
              </li>
              <li className="download">
                <a className="android"
                   href="http://mnch.me/a/110101738656125502?channel=interstitial&amp;data=eyJyZWZlcnJlcl92YWxpZCI6ZmFsc2UsInJlZmVycmVyX2Vycm9yIjoiU29ycnksIHRoYXQgaW52aXRlIGNvZGUgY2Fubm90IGJlIHVzZWQuIiwicmVmZXJyZXJfY29kZSI6bnVsbCwicmVmZXJyZXJfbmFtZSI6IllvdXIgRnJpZW5kIiwicmVmZXJyZXJfY3JlZGl0IjoiJDIwIiwiaW52aXRlcl9jcmVkaXQiOjIwLCJyZWZlcnJlZV9jcmVkaXQiOiIkMjAiLCJpbnZpdGVlX2NyZWRpdCI6MjAsInJlZmVycmVyX3Rva2VuIjoiOUU1MTYxQUZDOTE1QTBDIiwidCI6bnVsbCwiYSI6bnVsbCwiZCI6bnVsbH0%3D">Download
                  for <strong>Android</strong></a>
              </li>
            </ul>
          </section>
        </nav>


        <table className="fatal-error">
          <tbody>
          <tr>
            <td className="message ng-binding" ></td>
            <td className="close-box"></td>
          </tr>
          </tbody>
        </table>

        <a className="screen-reader" href="#content">Skip Navigation</a>


        <div className="freezable-body">

          <div className="header-container">
            <nav className="desktop-nav signed-in ">
              <div className="fluid-container full-width">
                <div className="row">
                  <a href="/" className="logo-container"></a>
                  <ul className="rag-left nav-links">

                    <li><a href="/menus/">Menu</a></li>

                    <li><a className="hiw-link" href="/how-it-works/">How It Works</a></li>

                    <li><a className="gifts-link" href="/gifts/">Gifts</a></li>

                    <li><a className="invite" href="/invite/">Give $20, Get $20</a></li>

                  </ul>

                  <ul className="rag-right nav-links">

                    <li>
                      <div className="address-picker no-hover-state">
                        <div className="address-or-zip-code ">
                          7655 Sunset Boulevard
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 18" className="dropdown-caret">
                          <path
                            d="M16.5 18c-.4 0-.8-.1-1.1-.4l-15-15C-.1 2-.1 1 .4.4 1-.1 2-.1 2.6.4l13.9 13.9L30.4.4c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-15 15c-.2.4-.6.5-1 .5z"></path>
                        </svg>


                        <div className="address-picker-dropdown">
                          <ul className="dropdown-menu notched-dropdown">
                            <div className="dropdown-notch"></div>

                            <li className="header">
                              <span>You have no recent addresses.</span>
                            </li>

                            <li className="footer zip-quick-entry">
                              <form className="zip-form ng-pristine ng-valid">
                                <input type="text" name="zipcode" maxLength="5" placeholder="ZIP Code" value=""/>
                                <button className="submit-zip orange">Change Zip</button>
                                <p className="errors">

                                  {/*<!-- ngSwitchWhen: unserviceable_zip -->*/}

                                  {/*<!-- ngSwitchWhen: cart_error -->*/}

                                  {/*<!-- ngSwitchWhen: invalid_zip_code -->*/}
                                </p>

                                <a className="manage-address-book" href="/users/addresses/">View Address Book</a>
                              </form>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>


                    <li className="account user-account-dropdown-button">
                      <a href="" className="profile-dropdown-button">
                        <div className="profile-image">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" version="1.1"
                               id="Layer_1" x="0px" y="0px" viewBox="0 0 11 12"
                               style={{enableBackground: 'new 0 0 11 12'}} >

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
                        <div className="user-info">
                          <a className="name bold" href="/users/profile/">Kevin Hoang</a>
                          <a className="email" href="/users/profile/">internet.user2016@gmail.com</a>
                        </div>


                        <div className="account-options">
                          <ul>


                            <li>
                              <a href="/users/invoices/">
                                <img alt="Munchery Order History"
                                     src="https://assets3.munchery.com/assets/nav/order_icon-172c4585eac8da02f3ff3fb0a0b112ac7468ced8528493b2934d6722a81cf684.svg"/>
                                Order History
                              </a></li>

                            {/*<!-- end regulars link -->*/}


                            <li>
                              <a href="/users/profile/">
                                <img alt="Account Settings"
                                     src="https://assets1.munchery.com/assets/nav/settings_icon-1c8491847cef93644c74f039e4c6341edc3446bcf4da308d51637b8df22736e9.svg"/>
                                Account Settings
                              </a></li>
                            <li>
                              <a rel="nofollow" data-method="delete" href="/users/logout/">
                                <img alt="Log Out"
                                     src="https://assets2.munchery.com/assets/nav/logout_icon-fd4e45bf731afc46014f658673c5cb5ea18ff95586ef87bbf182e1ef39a75286.svg"/>
                                Log Out
                              </a></li>
                          </ul>
                        </div>
                      </div>
                      {/*<!-- End profile dropdown -->*/}
                    </li>
                    {/*<!-- End account li -->*/}

                  </ul>
                  <a href="/checkout/" className="cart-button-container">
                    <div className="image-button cart-button" data-qty=""></div>
                  </a>
                </div>
              </div>
            </nav>

            <div className="hamburger-nav-container">
              <nav className="hamburger-nav"></nav>
              <a href="/" className="clickable-area"></a>
              <a href="/checkout/" className="cart-button-container">
                <div className="image-button cart-button" data-qty=""></div>
              </a>
            </div>
          </div>

          <div className="post-header">


            <div className="modal-overlay loading-overlay dismiss-outside" >
              <div className="fluid-container">
                <div className="row center-x">
                  <div className="phone-col-12 panel">
                    <div className="order-gif"></div>
                    <div className="subtitle">LOADING MENU...</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-overlay modal-overlay optional-membo-learn-more"
                 >
              <div className="fluid-container">
                <div className="row center-x">
                  <div className="phone-col-12 panel has-x">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                         className="close-icon dismiss">
                      <path d="M1 1l14 14m0-14L1 15" stroke="#79776B" strokeWidth="2" fill="none"
                            strokeLinecap="round"></path>
                    </svg>


                    <div className="up-to-20-pct-off-graphic"></div>

                    <h1>Save up to 20% with Membership</h1>

                    <p>Munchery Membership lets us skip the markup on food and pass the savings
                      on to you.</p>

                    <h2>Members can also earn monthly perks, including:</h2>
                    <ul>
                      <li>Free Food</li>
                      <li>Free Delivery</li>
                      <li>Credits toward future purchases</li>
                    </ul>

                    <p>
                      After your FREE 30-Day trial, it's only 8.95/month.
                      <span>Cancel anytime.</span>
                    </p>

                    <a href="/membership" className="button large orange">Learn More</a>

                  </div>
                </div>
              </div>
            </div>


            <div  className="ng-scope">
              <div className="modal-overlay zip-gated-service ng-scope" >
                <div className="fluid-container">
                  <div className="row center-x">
                    <div className="phone-col-12 panel has-x">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                           className="close-icon dismiss">
                        <path d="M1 1l14 14m0-14L1 15" stroke="#79776B" strokeWidth="2" fill="none"
                              strokeLinecap="round"></path>
                      </svg>


                      <div>
                        <h1 className="ng-binding">Let us know where you’d like delivered</h1>
                        {/*<!-- ngIf: menu_target.service === 'lunch' -->*/}
                        <input  className="large ng-pristine ng-valid" type="text" name="zip"
                               placeholder="ZIP Code" maxLength="5"/>
                        <button className="orange large save verify-zip">Check Availability</button>
                        <p  className="error-text" style={{display: 'none'}}>Please enter a
                          5-digit ZIP Code</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-overlay service-unavailable" >
                <div className="fluid-container">
                  <div className="row center-x">
                    <div className="phone-col-12 panel has-x">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                           className="close-icon dismiss">
                        <path d="M1 1l14 14m0-14L1 15" stroke="#79776B" strokeWidth="2" fill="none"
                              strokeLinecap="round"></path>
                      </svg>


                      <div>
                        <h1>We’re Not Quite There...</h1>
                        <p className="ng-binding">We don’t deliver to but we’re expanding quickly.</p>
                        <p className="ng-binding">We’ll let you know when is available in the area!</p>
                        <button className="orange large dismiss">Back to Dinner</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div  className="modal-overlay service-gather-email ng-scope"
                   >
                <div className="fluid-container">
                  <div className="row center-x">
                    <div className="phone-col-12 panel has-x">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                           className="close-icon dismiss">
                        <path d="M1 1l14 14m0-14L1 15" stroke="#79776B" strokeWidth="2" fill="none"
                              strokeLinecap="round"></path>
                      </svg>


                      <div>
                        <h1>We’re Not Quite There...</h1>
                        <p className="ng-binding">We don’t deliver to but we’re expanding quickly. We can let you know
                          when is available in the area!</p>
                        <input  className="large ng-pristine ng-valid" type="text" name="email"
                               placeholder="Email"/>
                        <button className="orange large save verify-zip">Join the Waitlist</button>
                        <p  className="error-text" style={{display: 'none'}}>Please enter a
                          valid email address</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="menu-view" >
              <div className="non-details ng-scope" >
                <div className="sticky-nav-bar" data-auto-show-guider="1"
                     data-guider-clock-position="6" data-guider-offset-top="-45">
                  <div className="menu-nav ng-scope">
                    <div className="fluid-container full-width">
                      <div className="row">

                        <div className="menu-nav-left">

                        </div>

                        <div className="menu-nav-center">
                          <div className="date-picker">
                            <ul className="date-picker-dates" style={{width: '200%', transform: 'translateX(0%)'}}>
                              {/*<!-- ngRepeat: date in (menu_pages[current_page].toc_with_closed_dates || menu_pages[0].toc_with_closed_dates) -->*/}
                              <li

                                className="date-container ng-scope past">
                                <a href="#//dinner" className="cutoff-date-option" data-index="">
                                  <div className="date">
                                    <div className="day-of-week mobile ng-binding">
                                      Su
                                    </div>
                                    <div className="day-of-week desktop ng-binding">
                                      Sun
                                    </div>
                                    <div className="day-of-month ng-binding">
                                      4
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="date-container ng-scope past">
                                <a href="#//dinner" className="cutoff-date-option" data-index="">
                                  <div className="date">
                                    <div className="day-of-week mobile ng-binding">
                                      Mo
                                    </div>
                                    <div className="day-of-week desktop ng-binding">
                                      Mon
                                    </div>
                                    <div className="day-of-month ng-binding">
                                      5
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="date-container ng-scope past">
                                <a href="#//dinner" className="cutoff-date-option" data-index="">
                                  <div className="date">
                                    <div className="day-of-week mobile ng-binding">
                                      Tu
                                    </div>
                                    <div className="day-of-week desktop ng-binding">
                                      Tue
                                    </div>
                                    <div className="day-of-month ng-binding">
                                      6
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="date-container ng-scope past">
                                <a href="#//dinner" className="cutoff-date-option" data-index="">
                                  <div className="date">
                                    <div className="day-of-week mobile ng-binding">
                                      We
                                    </div>
                                    <div className="day-of-week desktop ng-binding">
                                      Wed
                                    </div>
                                    <div className="day-of-month ng-binding">
                                      7
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="date-container ng-scope past">
                                <a href="#//dinner" className="cutoff-date-option" data-index="">
                                  <div className="date">
                                    <div className="day-of-week mobile ng-binding">
                                      Th
                                    </div>
                                    <div className="day-of-week desktop ng-binding">
                                      Thu
                                    </div>
                                    <div className="day-of-month ng-binding">
                                      8
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="date-container ng-scope selected">
                                <a href="#/0/dinner" className="cutoff-date-option" data-index="0">
                                  <div className="date">
                                    <div className="day-of-week mobile ng-binding">
                                      Fr
                                    </div>
                                    <div className="day-of-week desktop ng-binding">
                                      Fri
                                    </div>
                                    <div className="day-of-month ng-binding">
                                      9
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="date-container ng-scope closed">
                                <a href="#//dinner" className="cutoff-date-option" data-index="">
                                  <div className="date">
                                    <div className="day-of-week mobile ng-binding">
                                      Sa
                                    </div>
                                    <div className="day-of-week desktop ng-binding">
                                      Closed
                                    </div>
                                    <div className="day-of-month ng-binding">
                                      10
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="date-container ng-scope closed">
                                <a href="#//dinner" className="cutoff-date-option" data-index="">
                                  <div className="date">
                                    <div className="day-of-week mobile ng-binding">
                                      Su
                                    </div>
                                    <div className="day-of-week desktop ng-binding">
                                      Closed
                                    </div>
                                    <div className="day-of-month ng-binding">
                                      11
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="date-container ng-scope">
                                <a href="#/1/dinner" className="cutoff-date-option" data-index="1">
                                  <div className="date">
                                    <div className="day-of-week mobile ng-binding">
                                      Mo
                                    </div>
                                    <div className="day-of-week desktop ng-binding">
                                      Mon
                                    </div>
                                    <div className="day-of-month ng-binding">
                                      12
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="date-container ng-scope">
                                <a href="#/2/dinner" className="cutoff-date-option" data-index="2">
                                  <div className="date">
                                    <div className="day-of-week mobile ng-binding">
                                      Tu
                                    </div>
                                    <div className="day-of-week desktop ng-binding">
                                      Tue
                                    </div>
                                    <div className="day-of-month ng-binding">
                                      13
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="date-container ng-scope">
                                <a href="#/3/dinner" className="cutoff-date-option" data-index="3">
                                  <div className="date">
                                    <div className="day-of-week mobile ng-binding">
                                      We
                                    </div>
                                    <div className="day-of-week desktop ng-binding">
                                      Wed
                                    </div>
                                    <div className="day-of-month ng-binding">
                                      14
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="date-container ng-scope">
                                <a href="#/4/dinner" className="cutoff-date-option" data-index="4">
                                  <div className="date">
                                    <div className="day-of-week mobile ng-binding">
                                      Th
                                    </div>
                                    <div className="day-of-week desktop ng-binding">
                                      Thu
                                    </div>
                                    <div className="day-of-month ng-binding">
                                      15
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="date-container ng-scope special">
                                <a href="#/5/dinner" className="cutoff-date-option" data-index="5">
                                  <div className="date">
                                    <div className="day-of-week mobile ng-binding">
                                      Fr
                                    </div>
                                    <div className="day-of-week desktop ng-binding">
                                      Fri
                                    </div>
                                    <div className="day-of-month ng-binding">
                                      16
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li className="date-container ng-scope future">
                                <a href="#//dinner" className="cutoff-date-option" data-index="">
                                  <div className="date">
                                    <div className="day-of-week mobile ng-binding">
                                      Sa
                                    </div>
                                    <div className="day-of-week desktop ng-binding">
                                      Sat
                                    </div>
                                    <div className="day-of-month ng-binding">
                                      17
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                            <div className="week-changer previous-week disabled">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 18" fill="#F27242"
                                   className="dropdown-caret">
                                <path
                                  d="M16.5 18c-.4 0-.8-.1-1.1-.4l-15-15C-.1 2-.1 1 .4.4 1-.1 2-.1 2.6.4l13.9 13.9L30.4.4c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-15 15c-.2.4-.6.5-1 .5z"></path>
                              </svg>

                            </div>
                            <div className="week-changer next-week">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 18" fill="#F27242"
                                   className="dropdown-caret">
                                <path
                                  d="M16.5 18c-.4 0-.8-.1-1.1-.4l-15-15C-.1 2-.1 1 .4.4 1-.1 2-.1 2.6.4l13.9 13.9L30.4.4c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-15 15c-.2.4-.6.5-1 .5z"></path>
                              </svg>

                            </div>
                          </div>
                        </div>

                        <div className="menu-nav-right">

                          <div className="nav-item menu-filters-button"
                               data-dropdown="#menu-filters-dropdown" data-vertical-offset="1" data-filter-count="0"></div>

                          <div id="menu-filters-dropdown"
                               className="menu-filters-dropdown dropdown dropdown-relative has-icons dropdown-anchor-right notched-dropdown ng-scope">
                            <ul className="dropdown-menu dropdown-menu-multiselect">
                              <div className="dropdown-notch"></div>

                              <li className="tag vegetarian" >
                                <a href="javascript:void(0);"
                                   >
                                  <div>Vegetarian</div>
                                </a>
                              </li>
                              <li className="tag gluten-free" >
                                <a href="javascript:void(0);">
                                  <div>Gluten-Free</div>
                                </a>
                              </li>
                              <li className="tag dairy-free" >
                                <a href="javascript:void(0);">
                                  <div>Dairy-Free</div>
                                </a>
                              </li>
                              <li className="tag nut-free" >
                                <a href="javascript:void(0);">
                                  <div>Nut-Free</div>
                                </a>
                              </li>
                              <li className="tag vegan" >
                                <a href="javascript:void(0);">
                                  <div>Vegan</div>
                                </a>
                              </li>
                              <li className="tag egg-free" >
                                <a href="javascript:void(0);">
                                  <div>Egg-Free</div>
                                </a>
                              </li>

                              <li className="footer disabled">
                                <a className="clear-filters"
                                   href="javascript:void(0);">Clear Filters</a>
                              </li>

                            </ul>
                          </div>
                          {/*<!-- .menu-filters-dropdown -->*/}
                        </div>
                        {/*<!-- .menu-nav-right -->*/}
                      </div>
                    </div>
                  </div>
                  {/*<!-- .menu-nav -->*/}

                </div>

                <div className="modal-overlay sameday-menu-status" >
                  <div className="fluid-container">
                    <div className="row center-x">
                      <div className="menu-status-background phone-col-10 tablet-col-8 desktop-col-6 panel">
                        {/*<!-- ngIf: M.MenuApp.MenuAppController.get_dinner_menu_availability().sameday_status == 'pending_cutoff' -->*/}
                        <h3 className="ng-binding">Sorry, we missed you today.</h3>
                        <p className="subtext ng-binding">How about ordering for another day?</p>
                        <button className="dismiss large orange centered ng-binding">See Tomorrow's Menu</button>
                        {/*<!-- ngIf: current_meal_service === 'dinner' && M.MenuApp.MenuAppController.get_dinner_menu_availability().sameday_status == 'pending_cutoff' -->*/}
                      </div>
                    </div>
                  </div>
                </div>


                <div className="modal-overlay service-change-warning" >
                  <div className="fluid-container">
                    <div className="row center-x">
                      <div className="phone-col-12 panel has-x">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                             className="close-icon dismiss">
                          <path d="M1 1l14 14m0-14L1 15" stroke="#79776B" strokeWidth="2" fill="none"
                                strokeLinecap="round"></path>
                        </svg>

                        {/*<!-- ngSwitchWhen: sameday -->*/}
                        {/*<!-- ngSwitchWhen: rte_shipping -->*/}
                        {/*<!-- ngSwitchWhen: shipping -->*/}
                        {/*<!-- ngSwitchWhen: waitlist -->*/}
                      </div>
                    </div>
                  </div>
                </div>


                {/*<!-- only show for membo-eligible people that do not have a Lunch/Dinner picker -->*/}
                <div className="modal-overlay rewards-learn-more-modal" >
                  <div className="fluid-container">
                    <div className="row center-x">
                      <div className="phone-col-12 tablet-col-12 desktop-col-8 panel">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                             className="close-icon dismiss">
                          <path d="M1 1l14 14m0-14L1 15" stroke="#79776B" strokeWidth="2" fill="none"
                                strokeLinecap="round"></path>
                        </svg>

                        <h1>About Membership Perks</h1>
                        <div className="row center-x actions">
                          <p>
                            Our Membership Perks program lets you score discounts and freebies
                            each time you order. The clock resets every month, and you always
                            start out with a free delivery.
                          </p>

                          <p className="disclaimer">
                            *Monthly free delivery begins after conclusion of 30-day FREE trial.
                            $25 minimum order size. Membership costs only $8.95/month.
                            Cancel anytime.
                          </p>

                          <div className="medium orange button dismiss">See the Menu</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="paginated-area" >
                  {/*<!-- ngIf: !M.MenuApp.MenuAppController.should_show_cutoff() -->*/}
                  <div  className="ng-scope">
                    <div className="menu-announcement">
                      <div className="current-banner ng-scope"  >

                        <div className="banners banner-animate-next">
                          <a className="banner banner-204 no-clickthru" href="javascript:void(0);" target="_self"
                             draggable="false"></a>

                        </div>

                      </div>
                    </div>

                  </div>


                  <div className="fluid-container ng-scope">
                    <div className="row center-x">
                      <div className="phone-col-12 tablet-col-12">

                        <a className="expand-mobile-filters"
                           data-filter-count="0" href="javascript:void(0);">
                        </a>
                      </div>
                      <div className="phone-col-12 tablet-col-12">
                        <div className="mobile-menu-filters">
                          <ul>
                            <li className="tag vegetarian" >
                              <a href="javascript:void(0);">Vegetarian</a>
                            </li>
                            <li className="tag gluten-free" >
                              <a href="javascript:void(0);">Gluten-Free</a>
                            </li>
                            <li className="tag dairy-free" >
                              <a href="javascript:void(0);">Dairy-Free</a>
                            </li>
                            <li className="tag nut-free" >
                              <a href="javascript:void(0);">Nut-Free</a>
                            </li>
                            <li className="tag vegan" >
                              <a href="javascript:void(0);">Vegan</a>
                            </li>
                            <li className="tag egg-free" >
                              <a href="javascript:void(0);">Egg-Free</a>
                            </li>

                            <li className="footer disabled">
                              <a className="clear-filters"
                                 href="javascript:void(0);">Clear Filters</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*<!-- .mobile-menu-filters-container -->*/}

                  {/*<!-- ngIf: M.MenuApp.MenuAppController.should_show_cutoff() -->*/}

                  <div className="ng-scope">
                    {/*<!-- ngIf: !!menu_pages[current_page] && !menu_pages[current_page].toc -->*/}

                    <ul className="menu-pages">

                      {/*<!-- ngRepeat: (page_number, page_data) in menu_pages -->*/}
                      <li className="menu-page ng-scope current"
                          data-filters="" data-page-number="0">

                        <ul className="meal-services"  data-current-meal-service="dinner">
                          {/*<!-- ngRepeat: (meal_service_name, meal_service) in page_data.menu.meal_services -->*/}
                          <li className="meal-service dinner">

                            {/*<!-- ngRepeat: section in meal_service.sections -->*/}
                            <section className="menu-section fluid-container ng-scope" data-name="Main Dishes">
                              <div className="menu-section-header">
                                <div className="section-name ng-binding">Main Dishes</div>
                                {/*<!-- ngIf: section.description.length > 0 -->*/}
                                <div className="section-description ng-scope ng-binding">
                                  From our kitchen, ready to heat
                                </div>
                              </div>
                              <ul className="menu-items row" data-name="Main Dishes">

                                {/*<!-- ngRepeat: item in section.items -->*/}
                                <li  className="menu-item ng-scope dairyfree eggfree passes-filters"
                                    data-schedule-id="761553"
                                    data-url="thai-grilled-chicken-crunch-salad">
                                  <a className="item-photo-container ng-scope"
                                     href="#/0/dinner/thai-grilled-chicken-crunch-salad/info">

                                    <div className="photo item-photo"

                                         data-qty-in-cart="false">
                                    </div>

                                    <div className="recently-added">NEW</div>

                                  </a>

                                  <div className="details ng-scope">

                                    <div className="featured-source ng-binding visible">Maggie's Farms
                                    </div>

                                    <a className="item-name" href="#/0/dinner/thai-grilled-chicken-crunch-salad/info">
                                      <span className="recently-added">NEW</span>
                                      <span className="text ng-binding" >Thai-Grilled Chicken Crunch Salad</span>
                                      <span className="spicy"></span>
                                      <span className="serves-1"></span>
                                    </a>

                                    <a className="item-description ng-binding"
                                       href="#/0/dinner/thai-grilled-chicken-crunch-salad/info">This salad is an ideal choice if you're
                                      looking for a healthy lunch or dinner that is full of flavor. And like the name of
                                      the salad indicates, there's no shortage of crunch. The grilled chicken breast is
                                      served over a bed of shredded carrots, sliced cucumbers, julienned sweet peppers,
                                      and shredded red cabbage to give the salad a satisfying texture. Since everything
                                      is cut uniformly, all you have to do is toss in the Thai peanut and coconut
                                      dressing for a delicious alternative to the standard salad. </a>

                                    {/*<!-- ngIf: !!item.ingredient_sourcing_tags.length -->*/}
                                    <ul className="ingredient-sources ng-scope">
                                      {/*<!-- ngRepeat: source in item.ingredient_sourcing_tags | limitTo: 3 -->*/}
                                      <li className="ingredient-source ng-scope ng-binding">
                                        Sustainable
                                      </li>
                                    </ul>

                                    <div className="actions">
                                      {/*<!-- ngIf: item.price -->*/}
                                      <div className="price ng-scope ng-binding" >
                                        $12.<sup className="ng-binding">75</sup>
                                      </div>

                                      {/*<!-- ngIf: !item.custom_button_text -->*/}
                                      <div className="buttons ng-scope" >
                                        <button className="small remove-from-cart"
                                                title="Remove from Cart"
                                                style={{display: 'none'}}><span className="remove-icon"></span></button>
                                        <button className="small add-to-cart"
                                                title="Add to Cart"><span className="add-icon"></span><span
                                          className="add-text">Add</span></button>
                                      </div>

                                      {/*<!-- ngIf: !!item.custom_button_text && !!item.custom_url -->*/}

                                      <div className="status ng-binding">

                                      </div>
                                    </div>
                                  </div>

                                </li>
                                <li  className="menu-item ng-scope vegetarian passes-filters featured"
                                     data-schedule-id="761478"
                                    data-url="summer-penne-pesto-1">
                                  <a className="item-photo-container ng-scope"
                                     href="#/0/dinner/summer-penne-pesto-1/info">

                                    <div className="photo item-photo"

                                         data-qty-in-cart="false"
                                    >
                                    </div>

                                    <div className="recently-added">NEW</div>

                                  </a>

                                  <div className="details ng-scope">

                                    <div className="featured-source ng-binding"></div>

                                    <a className="item-name" href="#/0/dinner/summer-penne-pesto-1/info">
                                      <span className="recently-added">NEW</span>
                                      <span className="text ng-binding" >Summer Penne Pesto</span>
                                      <span className="spicy"></span>
                                      <span className="serves-1"></span>
                                    </a>

                                    <a className="item-description ng-binding"
                                       href="#/0/dinner/summer-penne-pesto-1/info">We can't go into summer without pesto.
                                      It's a simple, light and familiar flavor to welcome in warmer weather. We make a
                                      traditional balance of fresh basil, pine nuts and Parmesan cheese and toss it with
                                      al dente penne. Toasted pine nuts and extra shaved Parmesan comes on the
                                      side. </a>

                                    {/*<!-- ngIf: !!item.ingredient_sourcing_tags.length -->*/}
                                    <ul className="ingredient-sources ng-scope">
                                      {/*<!-- ngRepeat: source in item.ingredient_sourcing_tags | limitTo: 3 -->*/}
                                      <li className="ingredient-source ng-scope ng-binding">
                                        Local
                                      </li>
                                      <li className="ingredient-source ng-scope ng-binding">
                                        Sustainable
                                      </li>
                                      <li className="ingredient-source ng-scope ng-binding">
                                        GMO free
                                      </li>
                                    </ul>

                                    <div className="actions">
                                      {/*<!-- ngIf: item.price -->*/}
                                      <div className="price ng-scope ng-binding">
                                        $12.<sup className="ng-binding">95</sup>
                                      </div>

                                      {/*<!-- ngIf: !item.custom_button_text -->*/}
                                      <div className="buttons ng-scope">
                                        <button className="small remove-from-cart"
                                                title="Remove from Cart"
                                                style={{display: 'none'}}><span className="remove-icon"></span></button>
                                        <button className="small add-to-cart"
                                                title="Add to Cart"><span className="add-icon"></span><span
                                          className="add-text">Add</span></button>
                                      </div>

                                      {/*<!-- ngIf: !!item.custom_button_text && !!item.custom_url -->*/}

                                      <div className="status ng-binding">

                                      </div>
                                    </div>
                                  </div>

                                </li>
                                <li
                                    className="menu-item ng-scope dairyfree eggfree passes-filters recently-added" data-schedule-id="761613"
                                    data-url="harissa-grilled-chicken-1">
                                  <a className="item-photo-container ng-scope"
                                     href="#/0/dinner/harissa-grilled-chicken-1/info">

                                    <div className="photo item-photo"

                                         data-qty-in-cart="false"
                                         >
                                    </div>

                                    <div className="recently-added">NEW</div>

                                  </a>

                                  <div className="details ng-scope">

                                    <div className="featured-source ng-binding visible">Wayne Farms
                                    </div>

                                    <a className="item-name" href="#/0/dinner/harissa-grilled-chicken-1/info">
                                      <span className="recently-added">NEW</span>
                                      <span className="text ng-binding">Harissa Grilled Chicken</span>
                                      <span className="spicy"></span>
                                      <span className="serves-1"></span>
                                    </a>

                                    <a className="item-description ng-binding"
                                       href="#/0/dinner/harissa-grilled-chicken-1/info">Marinated in a red chili paste and served
                                      over saffron rice, this chicken has the right amount of heat without being
                                      overwhelming. &nbsp;The chicken is coated in a traditional Middle Eastern spice
                                      blend before being grilled over an open flame. Toasted garlic chips give this dish
                                      some bite and the golden raisin chutney balances with a bit of natural
                                      sweetness. </a>

                                    {/*<!-- ngIf: !!item.ingredient_sourcing_tags.length -->*/}
                                    <ul className="ingredient-sources ng-scope">
                                      {/*<!-- ngRepeat: source in item.ingredient_sourcing_tags | limitTo: 3 -->*/}
                                      <li className="ingredient-source ng-scope ng-binding">
                                        Local
                                      </li>
                                      <li className="ingredient-source ng-scope ng-binding">
                                        Sustainable
                                      </li>
                                    </ul>

                                    <div className="actions">
                                      {/*<!-- ngIf: item.price -->*/}
                                      <div className="price ng-scope ng-binding">
                                        $13.<sup className="ng-binding">25</sup>
                                      </div>

                                      {/*<!-- ngIf: !item.custom_button_text -->*/}
                                      <div className="buttons ng-scope" >
                                        <button className="small remove-from-cart"
                                                title="Remove from Cart"
                                                style={{display: 'none'}}><span className="remove-icon"></span></button>
                                        <button className="small add-to-cart"
                                                title="Add to Cart"><span className="add-icon"></span><span
                                          className="add-text">Add</span></button>
                                      </div>

                                      {/*<!-- ngIf: !!item.custom_button_text && !!item.custom_url -->*/}

                                      <div className="status ng-binding">

                                      </div>
                                    </div>
                                  </div>

                                </li>
                                <li
                                    className="menu-item ng-scope dairyfree eggfree passes-filters recently-added" data-schedule-id="761583"
                                    data-url="korean-pork-and-barley-bowl">
                                  <a className="item-photo-container ng-scope"
                                     href="#/0/dinner/korean-pork-and-barley-bowl/info">

                                    <div className="photo item-photo"

                                         data-qty-in-cart="false"
                                         >
                                    </div>

                                    <div className="recently-added">NEW</div>

                                  </a>

                                  <div className="details ng-scope">

                                    <div className="featured-source ng-binding visible">All Natural
                                    </div>

                                    <a className="item-name" href="#/0/dinner/korean-pork-and-barley-bowl/info">
                                      <span className="recently-added">NEW</span>
                                      <span className="text ng-binding"
                                            >Korean Pork &amp; Barley Bowl</span>
                                      <span className="spicy"></span>
                                      <span className="serves-1"></span>
                                    </a>

                                    <a className="item-description ng-binding"
                                       href="#/0/dinner/korean-pork-and-barley-bowl/info">This hearty grain bowl begins with a base
                                      of pleasantly chewy barley and an Asian-influenced super-green salad of baby kale,
                                      bok choy, Brussels sprouts, red cabbage, and broccoli. To that we add an ample
                                      portion of tender Korean-style ground pork and a sprinkle of sesame seeds,
                                      scallions, and cilantro. Our dressing harnesses the power of the Korean chili
                                      paste gochujang to add a savory — but not spicy — finish.</a>

                                    {/*<!-- ngIf: !!item.ingredient_sourcing_tags.length -->*/}
                                    <ul className="ingredient-sources ng-scope">
                                      {/*<!-- ngRepeat: source in item.ingredient_sourcing_tags | limitTo: 3 -->*/}
                                      <li className="ingredient-source ng-scope ng-binding">
                                        Sustainable
                                      </li>
                                    </ul>

                                    <div className="actions">
                                      {/*<!-- ngIf: item.price -->*/}
                                      <div className="price ng-scope ng-binding">
                                        $11.<sup className="ng-binding">75</sup>
                                      </div>

                                      {/*<!-- ngIf: !item.custom_button_text -->*/}
                                      <div className="buttons ng-scope">
                                        <button className="small remove-from-cart"
                                                title="Remove from Cart"
                                                style={{display: 'none'}}><span className="remove-icon"></span></button>
                                        <button className="small add-to-cart"
                                                title="Add to Cart"><span className="add-icon"></span><span
                                          className="add-text">Add</span></button>
                                      </div>

                                      {/*<!-- ngIf: !!item.custom_button_text && !!item.custom_url -->*/}

                                      <div className="status ng-binding">

                                      </div>
                                    </div>
                                  </div>

                                </li>
                              </ul>
                              <div className="no-items-prompt ng-binding">
                                Due to the filters you applied, we do not have any Main Dishes that fit your dietary
                                preferences. Clear filters to see all results.
                                <a href="javascript:void(0);">Clear
                                  Filters</a>
                              </div>
                            </section>
                            <section className="menu-section fluid-container ng-scope" data-name="Cooking Kits">
                              <div className="menu-section-header">
                                <div className="section-name ng-binding">Cooking Kits</div>
                                {/*<!-- ngIf: section.description.length > 0 -->*/}
                                <div className="section-description ng-scope ng-binding">
                                  Make dinner for two in 15 minutes
                                </div>
                              </div>
                              <ul className="menu-items row" data-name="Cooking Kits">

                                {/*<!-- ngRepeat: item in section.items -->*/}
                                <li
                                    className="menu-item ng-scope glutenfree dairyfree nutfree eggfree passes-filters qty-limited recently-added" data-schedule-id="769369"
                                    data-url="tuna-and-avocado-rice-bowl-2">
                                  <a className="item-photo-container ng-scope"
                                     href="#/0/dinner/tuna-and-avocado-rice-bowl-2/info">

                                    <div className="photo item-photo"

                                         data-qty-in-cart="false"
                                         >
                                    </div>

                                    <div className="recently-added">NEW</div>

                                  </a>

                                  <div className="details ng-scope">

                                    <div className="featured-source ng-binding"></div>

                                    <a className="item-name" href="#/0/dinner/tuna-and-avocado-rice-bowl-2/info">
                                      <span className="recently-added">NEW</span>
                                      <span className="text ng-binding" >Tuna &amp;
                                        Avocado Rice Bowl</span>
                                      <span className="spicy"></span>
                                      <span className="serves-2"></span>
                                    </a>

                                    <a className="item-description ng-binding"
                                       href="#/0/dinner/tuna-and-avocado-rice-bowl-2/info">Tuna steaks get pan-seared so they’re
                                      still rare and yummy. A lovely topping of ginger-honey-garlic caramelized
                                      scallions gets spooned over the top. It’s served with steamed rice and creamy
                                      avocado wedges. <br/><br/>All you need is basic kitchen equipment (pots/pans,
                                      bowls, a knife, salt, pepper, oil) and around 15 minutes to create this creative
                                      dinner for two.</a>

                                    {/*<!-- ngIf: !!item.ingredient_sourcing_tags.length -->*/}
                                    <ul className="ingredient-sources ng-scope">
                                      {/*<!-- ngRepeat: source in item.ingredient_sourcing_tags | limitTo: 3 -->*/}
                                      <li className="ingredient-source ng-scope ng-binding">
                                        Gluten-free
                                      </li>
                                    </ul>

                                    <div className="actions">
                                      {/*<!-- ngIf: item.price -->*/}
                                      <div className="price ng-scope ng-binding">
                                        $24.<sup className="ng-binding">25</sup>
                                      </div>

                                      {/*<!-- ngIf: !item.custom_button_text -->*/}
                                      <div className="buttons ng-scope" >
                                        <button className="small remove-from-cart"
                                                title="Remove from Cart"
                                                style={{display: 'none'}}><span className="remove-icon"></span></button>
                                        <button className="small add-to-cart"
                                                title="Add to Cart"><span className="add-icon"></span><span
                                          className="add-text">Add</span></button>
                                      </div>

                                      {/*<!-- ngIf: !!item.custom_button_text && !!item.custom_url -->*/}

                                      <div className="status ng-binding">
                                        2 Left
                                      </div>
                                    </div>
                                  </div>

                                </li>
                                <li
                                    className="menu-item ng-scope nutfree dairyfree passes-filters recently-added featured"
                                    data-schedule-id="769339"
                                    data-url="lemongrass-pork-banh-mi-5">
                                  <a className="item-photo-container ng-scope"
                                     href="#/0/dinner/lemongrass-pork-banh-mi-5/info">

                                    <div className="photo item-photo"

                                         data-qty-in-cart="false"
                                         >
                                    </div>

                                    <div className="recently-added">NEW</div>

                                  </a>

                                  <div className="details ng-scope">

                                    <div className="featured-source ng-binding"></div>

                                    <a className="item-name" href="#/0/dinner/lemongrass-pork-banh-mi-5/info">
                                      <span className="recently-added">NEW</span>
                                      <span className="text ng-binding" >Lemongrass Pork Banh Mi</span>
                                      <span className="spicy"></span>
                                      <span className="serves-2"></span>
                                    </a>

                                    <a className="item-description ng-binding"
                                       href="#/0/dinner/lemongrass-pork-banh-mi-5/info">The banh mi, the most beloved of the Asian
                                      sandwiches, gets stuffed with lemongrass-ground pork for a super yummy outcome. We
                                      give you all the other necessary components—soft yet crusty baguette, cilantro
                                      sprigs, jalapeño, pickled vegetables, and spicy Sriracha mayo—for you to build the
                                      tastiest versions we know. <br/><br/>All you need is basic kitchen equipment
                                      (pots/pans, bowls, a knife, salt, pepper, oil) and you’ve got mighty tasty
                                      Vietnamese sandwiches coming out of your own kitchen. <br/><br/></a>

                                    {/*<!-- ngIf: !!item.ingredient_sourcing_tags.length -->*/}

                                    <div className="actions">
                                      {/*<!-- ngIf: item.price -->*/}
                                      <div className="price ng-scope ng-binding">
                                        $23.<sup className="ng-binding">50</sup>
                                      </div>

                                      {/*<!-- ngIf: !item.custom_button_text -->*/}
                                      <div className="buttons ng-scope" >
                                        <button className="small remove-from-cart"
                                                title="Remove from Cart"
                                                style={{display: 'none'}}><span className="remove-icon"></span></button>
                                        <button className="small add-to-cart"
                                                title="Add to Cart"><span className="add-icon"></span><span
                                          className="add-text">Add</span></button>
                                      </div>

                                      {/*<!-- ngIf: !!item.custom_button_text && !!item.custom_url -->*/}

                                      <div className="status ng-binding">

                                      </div>
                                    </div>
                                  </div>

                                </li>
                                <li
                                    className="menu-item ng-scope vegetarian glutenfree nutfree passes-filters qty-limited recently-added"
                                    data-schedule-id="769399"
                                    data-url="sweet-peppers-on-creamy-grits-3">
                                  <a className="item-photo-container ng-scope"
                                     href="#/0/dinner/sweet-peppers-on-creamy-grits-3/info">

                                    <div className="photo item-photo"

                                         data-qty-in-cart="false"
                                         >
                                    </div>

                                    <div className="recently-added">NEW</div>

                                  </a>

                                  <div className="details ng-scope">

                                    <div className="featured-source ng-binding"></div>

                                    <a className="item-name" href="#/0/dinner/sweet-peppers-on-creamy-grits-3/info">
                                      <span className="recently-added">NEW</span>
                                      <span className="text ng-binding">Sweet Peppers on Creamy Grits</span>
                                      <span className="spicy"></span>
                                      <span className="serves-2"></span>
                                    </a>

                                    <a className="item-description ng-binding"
                                       href="#/0/dinner/sweet-peppers-on-creamy-grits-3/info">Creamy, cheesy grits are the starting
                                      point to this hearty vegetarian dinner. Sauté a mix of baby peppers with onions to
                                      serve over the soft corn mixture and top with a perfectly cooked, soft-boiled egg.
                                      A few ribbons of fresh basil sprinkled over the top and you’ve got dinner.
                                      <br/><br/>All you need is basic kitchen equipment (pots/pans, bowls, a knife,
                                      salt, pepper, oil) and around 15 minutes to create this heavenly meal for
                                      two.<br/><br/></a>

                                    {/*<!-- ngIf: !!item.ingredient_sourcing_tags.length -->*/}
                                    <ul className="ingredient-sources ng-scope">
                                      {/*<!-- ngRepeat: source in item.ingredient_sourcing_tags | limitTo: 3 -->*/}
                                      <li className="ingredient-source ng-scope ng-binding">
                                        Organic Grits
                                      </li>
                                      <li className="ingredient-source ng-scope ng-binding">
                                        Vegetarian
                                      </li>
                                      <li className="ingredient-source ng-scope ng-binding">
                                        Gluten-free
                                      </li>
                                    </ul>

                                    <div className="actions">
                                      {/*<!-- ngIf: item.price -->*/}
                                      <div className="price ng-scope ng-binding">
                                        $21.<sup className="ng-binding">75</sup>
                                      </div>

                                      {/*<!-- ngIf: !item.custom_button_text -->*/}
                                      <div className="buttons ng-scope">
                                        <button className="small remove-from-cart"
                                                title="Remove from Cart"
                                                style={{display: 'none'}}><span className="remove-icon"></span></button>
                                        <button className="small add-to-cart"
                                                title="Add to Cart"><span className="add-icon"></span><span
                                          className="add-text">Add</span></button>
                                      </div>

                                      {/*<!-- ngIf: !!item.custom_button_text && !!item.custom_url -->*/}

                                      <div className="status ng-binding">
                                        6 Left
                                      </div>
                                    </div>
                                  </div>

                                </li>
                              </ul>
                              <div className="no-items-prompt ng-binding">
                                Due to the filters you applied, we do not have any Cooking Kits that fit your dietary
                                preferences. Clear filters to see all results.
                                <a href="javascript:void(0);">Clear
                                  Filters</a>
                              </div>
                            </section>
                            <section className="menu-section fluid-container ng-scope"
                                     data-name="Sides">
                              <div className="menu-section-header">
                                <div className="section-name ng-binding">Sides</div>
                                {/*<!-- ngIf: section.description.length > 0 -->*/}
                              </div>
                              <ul className="menu-items row" data-name="Sides">

                                {/*<!-- ngRepeat: item in section.items -->*/}
                                <li
                                    className="menu-item ng-scope vegetarian nutfree passes-filters qty-limited"
                                    data-schedule-id="761207"
                                    data-url="jalapeno-mac-and-cheese-2">
                                  <a className="item-photo-container ng-scope"
                                     href="#/0/dinner/jalapeno-mac-and-cheese-2/info">

                                    <div className="photo item-photo"

                                         data-qty-in-cart="false"
                                         >
                                    </div>

                                    <div className="recently-added">NEW</div>

                                  </a>

                                  <div className="details ng-scope">

                                    <div className="featured-source ng-binding"></div>

                                    <a className="item-name" href="#/0/dinner/jalapeno-mac-and-cheese-2/info">
                                      <span className="recently-added">NEW</span>
                                      <span className="text ng-binding"
                                            >Jalapeño Mac &amp; Cheese</span>
                                      <span className="spicy"></span>
                                      <span className="serves-1"></span>
                                    </a>

                                    <a className="item-description ng-binding"
                                       href="#/0/dinner/jalapeno-mac-and-cheese-2/info">Mac &amp; cheese gets a kick thanks to
                                      this grown-up version that has a blend of smoked gouda, sharp cheddar, and fresh
                                      jalapeño. Quality ingredients give this mac 'n' cheese depth in flavor and just
                                      enough heat to tingle the taste buds. If you have the time, we recommend that you
                                      heat this up in the oven to make sure it comes out warm and cheesy and forms a bit
                                      of a crunchy golden-brown crust. </a>

                                    {/*<!-- ngIf: !!item.ingredient_sourcing_tags.length -->*/}
                                    <ul className="ingredient-sources ng-scope">
                                      {/*<!-- ngRepeat: source in item.ingredient_sourcing_tags | limitTo: 3 -->*/}
                                      <li className="ingredient-source ng-scope ng-binding">
                                        Vegetarian
                                      </li>
                                    </ul>

                                    <div className="actions">
                                      {/*<!-- ngIf: item.price -->*/}
                                      <div className="price ng-scope ng-binding">
                                        $4.<sup className="ng-binding">95</sup>
                                      </div>

                                      {/*<!-- ngIf: !item.custom_button_text -->*/}
                                      <div className="buttons ng-scope">
                                        <button className="small remove-from-cart"
                                                title="Remove from Cart"
                                                style={{display: 'none'}}><span className="remove-icon"></span></button>
                                        <button className="small add-to-cart"
                                                title="Add to Cart"><span className="add-icon"></span><span
                                          className="add-text">Add</span></button>
                                      </div>

                                      {/*<!-- ngIf: !!item.custom_button_text && !!item.custom_url -->*/}

                                      <div className="status ng-binding">
                                        5 Left
                                      </div>
                                    </div>
                                  </div>

                                </li>
                                <li
                                    className="menu-item ng-scope eggfree glutenfree passes-filters qty-limited featured"
                                    data-schedule-id="761157"
                                    data-url="loaded-baked-potato">
                                  <a className="item-photo-container ng-scope"
                                     href="#/0/dinner/loaded-baked-potato/info">

                                    <div className="photo item-photo"

                                         data-qty-in-cart="false"
                                         >
                                    </div>

                                    <div className="recently-added">NEW</div>

                                  </a>

                                  <div className="details ng-scope">

                                    <div className="featured-source ng-binding"></div>

                                    <a className="item-name" href="#/0/dinner/loaded-baked-potato/info">
                                      <span className="recently-added">NEW</span>
                                      <span className="text ng-binding" >Loaded Baked Potato</span>
                                      <span className="spicy"></span>
                                      <span className="serves-1"></span>
                                    </a>

                                    <a className="item-description ng-binding"
                                       href="#/0/dinner/loaded-baked-potato/info">A perfectly roasted California russet
                                      potato gets split and filled with whatever toppings you fancy. Your choices: crisp
                                      bacon, tangy cheddar cheese, chopped scallions, sweet cream butter, or luscious
                                      sour cream. Can't decide? Yeah, we're a big fan of of just piling it all on top,
                                      too. </a>

                                    {/*<!-- ngIf: !!item.ingredient_sourcing_tags.length -->*/}
                                    <ul className="ingredient-sources ng-scope">
                                      {/*<!-- ngRepeat: source in item.ingredient_sourcing_tags | limitTo: 3 -->*/}
                                      <li className="ingredient-source ng-scope ng-binding">
                                        Sustainable
                                      </li>
                                      <li className="ingredient-source ng-scope ng-binding">
                                        Gluten-free
                                      </li>
                                    </ul>

                                    <div className="actions">
                                      {/*<!-- ngIf: item.price -->*/}
                                      <div className="price ng-scope ng-binding">
                                        $6.<sup className="ng-binding">50</sup>
                                      </div>

                                      {/*<!-- ngIf: !item.custom_button_text -->*/}
                                      <div className="buttons ng-scope">
                                        <button className="small remove-from-cart"
                                                title="Remove from Cart"
                                                style={{display: 'none'}}><span className="remove-icon"></span></button>
                                        <button className="small add-to-cart"
                                                title="Add to Cart"><span className="add-icon"></span><span
                                          className="add-text">Add</span></button>
                                      </div>

                                      {/*<!-- ngIf: !!item.custom_button_text && !!item.custom_url -->*/}

                                      <div className="status ng-binding">
                                        6 Left
                                      </div>
                                    </div>
                                  </div>

                                </li>
                                <li
                                    className="menu-item ng-scope nutfree eggfree passes-filters qty-limited"
                                    data-schedule-id="760521" data-url="pizza-biscuit">
                                  <a className="item-photo-container ng-scope" href="#/0/dinner/pizza-biscuit/info">

                                    <div className="photo item-photo"

                                         data-qty-in-cart="false"
                                         >
                                    </div>

                                    <div className="recently-added">NEW</div>

                                  </a>

                                  <div className="details ng-scope">

                                    <div className="featured-source ng-binding"></div>

                                    <a className="item-name" href="#/0/dinner/pizza-biscuit/info">
                                      <span className="recently-added">NEW</span>
                                      <span className="text ng-binding">Pizza Biscuit</span>
                                      <span className="spicy"></span>
                                      <span className="serves-1"></span>
                                    </a>

                                    <a className="item-description ng-binding" href="#/0/dinner/pizza-biscuit/info"
                                       >This mouthwatering mash-up is even greater
                                      than the sum of its parts (which says a lot, since its parts are “pizza” and
                                      “biscuit” — or, yum and more yum). Each of our fluffy buttermilk biscuits is
                                      filled with parmesan and jack cheese, savory pepperoni, and a hint of oregano,
                                      then baked till golden brown. Our sun dried tomato and fresh basil-infused butter
                                      is served on the side, so you can indulge as much or as little as you like.</a>

                                    {/*<!-- ngIf: !!item.ingredient_sourcing_tags.length -->*/}

                                    <div className="actions">
                                      {/*<!-- ngIf: item.price -->*/}
                                      <div className="price ng-scope ng-binding" >
                                        $3.<sup className="ng-binding">95</sup>
                                      </div>

                                      {/*<!-- ngIf: !item.custom_button_text -->*/}
                                      <div className="buttons ng-scope" >
                                        <button className="small remove-from-cart"
                                                title="Remove from Cart"
                                                style={{display: 'none'}}><span className="remove-icon"></span></button>
                                        <button className="small add-to-cart"

                                                title="Add to Cart"><span className="add-icon"></span><span
                                          className="add-text">Add</span></button>
                                      </div>

                                      {/*<!-- ngIf: !!item.custom_button_text && !!item.custom_url -->*/}

                                      <div className="status ng-binding">
                                        7 Left
                                      </div>
                                    </div>
                                  </div>

                                </li>
                              </ul>
                              <div className="no-items-prompt ng-binding">
                                Due to the filters you applied, we do not have any Sides that fit your dietary
                                preferences. Clear filters to see all results.
                                <a href="javascript:void(0);">Clear
                                  Filters</a>
                              </div>
                            </section>

                          </li>

                        </ul>

                        <div className="show-next-day">
                          <a href="#/1/dinner" className="button navigation ng-binding">
                            Browse Menu for Monday 6/12
                          </a>
                        </div>

                        <div className="munchery-promise">
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="31" viewBox="0 0 22 31"><title>
                            pinky</title>
                            <g fill="none" fillRule="evenodd">
                              <path d="M-5-1h32v32H-5z"></path>
                              <path
                                d="M1 20c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10c-2.255 0-4.5.755-6 2.014V3c0-1.1-.9-2-2-2s-2 .9-2 2v17z"
                                fill="#FFF"></path>
                              <path
                                d="M1 20c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10c-2.255 0-4.5.755-6 2.014V3c0-1.1-.9-2-2-2s-2 .9-2 2v17z"
                                stroke="#42413E" strokeWidth="1.5"></path>
                              <path d="M7 17.5c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2s2 .9 2 2v7c0 1.1-.9 2-2 2"
                                    fill="#FFF"></path>
                              <path d="M7 17.5c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2s2 .9 2 2v7c0 1.1-.9 2-2 2z"
                                    stroke="#42413E" strokeWidth="1.5"></path>
                              <path d="M11 17.5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2s2 .9 2 2v8.5c0 1.1-.9 2-2 2"
                                    fill="#FFF"></path>
                              <path d="M11 17.5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2s2 .9 2 2v8.5c0 1.1-.9 2-2 2z"
                                    stroke="#42413E" strokeWidth="1.5"></path>
                              <path d="M15 17.5c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2s2 .9 2 2v7c0 1.1-.9 2-2 2"
                                    fill="#FFF"></path>
                              <path d="M15 17.5c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2s2 .9 2 2v7c0 1.1-.9 2-2 2z"
                                    stroke="#42413E" strokeWidth="1.5"></path>
                              <path
                                d="M11.495 29.975C16.786 29.715 21 25.355 21 20v-6.25a2.257 2.257 0 0 0-2.25-2.25H11.5V13c0 1.375 1.125 2.5 2.5 2.5h.263C11.41 17.258 9.5 20.4 9.5 24"
                                fill="#FFF"></path>
                              <path
                                d="M11.495 29.975C16.786 29.715 21 25.355 21 20v-6.25a2.257 2.257 0 0 0-2.25-2.25H11.5V13c0 1.375 1.125 2.5 2.5 2.5h.263C11.41 17.258 9.5 20.4 9.5 24"
                                stroke="#42413E" strokeWidth="1.5" strokeLinecap="round"></path>
                            </g>
                          </svg>

                          <h6>Munchery Promise</h6>
                          <p>We want you to be completely satisfied with your order. If you’re not, please reach out to
                            our <a target="_blank" href="/support/">Customer Care Team</a> and they can help you right
                            away.</p>
                        </div>


                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              <div className="detail-view offscreen ng-scope" style={{overflowY: 'hidden'}}>
                <div ></div>
                <div
                ></div>
              </div>

            </div>


          </div>


          <nav className="footer">
            <div className="footer-contents">
              <div className="footer-col collapsed">
                <h4>Help &amp; Support</h4>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 18" fill="#F27242" className="footer-caret">
                  <path
                    d="M16.5 18c-.4 0-.8-.1-1.1-.4l-15-15C-.1 2-.1 1 .4.4 1-.1 2-.1 2.6.4l13.9 13.9L30.4.4c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-15 15c-.2.4-.6.5-1 .5z"></path>
                </svg>

                <ul>
                  <li><a className="faq-link" href="/help/">Help Center</a></li>
                  <li><a href="/food-near-me/">Service Areas</a></li>
                  <li><a href="/support/">Contact Support</a></li>
                  <li><a href="/about/privacy-and-terms-of-service/">Privacy &amp; Terms</a></li>
                </ul>
              </div>
              <div className="footer-col collapsed">
                <h4>Munchery</h4>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 18" fill="#F27242" className="footer-caret">
                  <path
                    d="M16.5 18c-.4 0-.8-.1-1.1-.4l-15-15C-.1 2-.1 1 .4.4 1-.1 2-.1 2.6.4l13.9 13.9L30.4.4c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-15 15c-.2.4-.6.5-1 .5z"></path>
                </svg>

                <ul>
                  <li><a href="/how-it-works/">How It Works</a></li>
                  <li><a href="https://munchery.com/blog">Blog</a></li>
                  <li><a href="/press/">Press</a></li>
                </ul>
              </div>
              <div className="footer-col collapsed">
                <h4>Products</h4>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 18" fill="#F27242" className="footer-caret">
                  <path
                    d="M16.5 18c-.4 0-.8-.1-1.1-.4l-15-15C-.1 2-.1 1 .4.4 1-.1 2-.1 2.6.4l13.9 13.9L30.4.4c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-15 15c-.2.4-.6.5-1 .5z"></path>
                </svg>

                <ul>
                  <li><a href="/gifts/">Gift Cards</a></li>
                  <li><a href="/giving/">Munchery Giving</a></li>
                  <li><a href="/mobile/">Mobile Apps</a></li>
                  <li><a href="/food-delivery/">Menu Sitemap</a></li>
                </ul>
              </div>
              <div className="footer-col last-col collapsed">
                <h4>Join Us</h4>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 18" fill="#F27242" className="footer-caret">
                  <path
                    d="M16.5 18c-.4 0-.8-.1-1.1-.4l-15-15C-.1 2-.1 1 .4.4 1-.1 2-.1 2.6.4l13.9 13.9L30.4.4c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-15 15c-.2.4-.6.5-1 .5z"></path>
                </svg>

                <ul>
                  <li><a href="/jobs/">Jobs</a></li>
                  <li><a href="/delivery/">Become A Driver</a></li>
                  <li><a href="mailto:partnerships@munchery.com">Partnerships</a></li>
                </ul>
                <div className="footer-social phone-hide">
                  <a href="https://www.facebook.com/munchery">
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="16" viewBox="0 0 7 16"
                         className="social-icon"><title>Group</title>
                      <g fill="none" fillRule="evenodd">
                        <path d="M-4 0h16v16H-4z"></path>
                        <path className="color-path"
                              d="M5.338 2.807c-.35 0-.7.374-.7.655v1.871H7a43.859 43.859 0 0 1-.262 2.714h-2.1V16h-3.15V7.953H0V5.24h1.487V3.088C1.487 2.713 1.4 0 4.637 0h2.276C7 1.123 7 2.433 7 2.807H5.338z"
                              fill="#FFF"></path>
                      </g>
                    </svg>

                  </a> <a href="https://twitter.com/munchery">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13"
                       className="social-icon"><title>Group</title>
                    <g fill="none" fillRule="evenodd">
                      <path d="M0-2h16v16H0z"></path>
                      <path className="color-path"
                            d="M14.211 3.7c0 4.3-3.28 9.3-9.242 9.3C3.08 13 1.39 12.5 0 11.5h.795c1.49 0 2.981-.5 4.075-1.4-1.392 0-2.584-1-3.081-2.3.199 0 .397.1.596.1.298 0 .596 0 .895-.1C1.789 7.5.696 6.2.696 4.6c.397.2.894.4 1.49.4-.894-.6-1.49-1.6-1.49-2.7 0-.6.198-1.2.397-1.7 1.59 2 3.975 3.3 6.758 3.4-.1-.2-.1-.5-.1-.7 0-1.8 1.491-3.3 3.28-3.3.894 0 1.789.4 2.385 1 .696-.1 1.49-.4 2.087-.8-.199.8-.795 1.4-1.391 1.8.695-.1 1.292-.3 1.888-.5-.596.7-1.193 1.3-1.789 1.8v.4z"
                            fill="#FFF"></path>
                    </g>
                  </svg>

                </a> <a href="https://www.pinterest.com/munchery/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="77 1 14 17"
                       className="social-icon">
                    <path className="color-path"
                          d="M82.5 11.9s-.6 2.3-.7 2.7c-.4 1.5-1.6 3.1-1.7 3.2-.1.1-.2.1-.2-.1s-.3-2.1 0-3.7c.2-.8 1.2-5.3 1.2-5.3s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.2 1 .5 1.9 1.5 1.9 1.8 0 3.1-2.4 3.1-5.2 0-2.1-1.4-3.7-4-3.7-2.9 0-4.7 2.2-4.7 4.7 0 .9.2 1.5.6 1.9.2.2.2.3.1.5 0 .2-.2.6-.2.8-.1.2-.3.3-.5.2-1.3-.6-2-2.1-2-3.7C77 4.3 79.3 1 83.9 1 87.6 1 90 3.7 90 6.6c.1 3.7-2 6.5-5.1 6.5-1 0-2-.6-2.4-1.2z"
                          fill="#515252" fillRule="evenodd"></path>
                  </svg>

                </a> <a href="https://instagram.com/munchery/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="117 2 14 15"
                       className="social-icon">
                    <path className="color-path"
                          d="M131 14.4c0 .9-.7 1.6-1.6 1.6h-10.8c-.9 0-1.6-.7-1.6-1.6V3.6c0-.9.7-1.6 1.6-1.6h10.8c.9 0 1.6.7 1.6 1.6v10.8zM128.3 9c0 2.4-1.9 4.3-4.3 4.3s-4.3-1.9-4.3-4.3c0-.4.1-.7.1-1.1h-1.2v5.9c0 .3.2.5.5.5h9.7c.3 0 .5-.2.5-.5V7.9h-1.2c.1.4.2.7.2 1.1zm-4.3 2.7a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4zm4.8-8.1h-1.6c-.3 0-.5.2-.5.5v1.6c0 .3.2.5.5.5h1.6c.3 0 .5-.2.5-.5V4.1c.1-.2-.2-.5-.5-.5z"
                          fill="#515252" fillRule="evenodd"></path>
                  </svg>

                </a></div>
              </div>

              <div className="footer-social phone-show">
                <a href="https://www.facebook.com/munchery">
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="16" viewBox="0 0 7 16"
                       className="social-icon"><title>Group</title>
                    <g fill="none" fillRule="evenodd">
                      <path d="M-4 0h16v16H-4z"></path>
                      <path className="color-path"
                            d="M5.338 2.807c-.35 0-.7.374-.7.655v1.871H7a43.859 43.859 0 0 1-.262 2.714h-2.1V16h-3.15V7.953H0V5.24h1.487V3.088C1.487 2.713 1.4 0 4.637 0h2.276C7 1.123 7 2.433 7 2.807H5.338z"
                            fill="#FFF"></path>
                    </g>
                  </svg>

                </a> <a href="https://twitter.com/munchery">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13"
                     className="social-icon"><title>Group</title>
                  <g fill="none" fillRule="evenodd">
                    <path d="M0-2h16v16H0z"></path>
                    <path className="color-path"
                          d="M14.211 3.7c0 4.3-3.28 9.3-9.242 9.3C3.08 13 1.39 12.5 0 11.5h.795c1.49 0 2.981-.5 4.075-1.4-1.392 0-2.584-1-3.081-2.3.199 0 .397.1.596.1.298 0 .596 0 .895-.1C1.789 7.5.696 6.2.696 4.6c.397.2.894.4 1.49.4-.894-.6-1.49-1.6-1.49-2.7 0-.6.198-1.2.397-1.7 1.59 2 3.975 3.3 6.758 3.4-.1-.2-.1-.5-.1-.7 0-1.8 1.491-3.3 3.28-3.3.894 0 1.789.4 2.385 1 .696-.1 1.49-.4 2.087-.8-.199.8-.795 1.4-1.391 1.8.695-.1 1.292-.3 1.888-.5-.596.7-1.193 1.3-1.789 1.8v.4z"
                          fill="#FFF"></path>
                  </g>
                </svg>

              </a> <a href="https://www.pinterest.com/munchery/">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="77 1 14 17"
                     className="social-icon">
                  <path className="color-path"
                        d="M82.5 11.9s-.6 2.3-.7 2.7c-.4 1.5-1.6 3.1-1.7 3.2-.1.1-.2.1-.2-.1s-.3-2.1 0-3.7c.2-.8 1.2-5.3 1.2-5.3s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.2-.9 3.5-.2 1 .5 1.9 1.5 1.9 1.8 0 3.1-2.4 3.1-5.2 0-2.1-1.4-3.7-4-3.7-2.9 0-4.7 2.2-4.7 4.7 0 .9.2 1.5.6 1.9.2.2.2.3.1.5 0 .2-.2.6-.2.8-.1.2-.3.3-.5.2-1.3-.6-2-2.1-2-3.7C77 4.3 79.3 1 83.9 1 87.6 1 90 3.7 90 6.6c.1 3.7-2 6.5-5.1 6.5-1 0-2-.6-2.4-1.2z"
                        fill="#515252" fillRule="evenodd"></path>
                </svg>

              </a> <a href="https://instagram.com/munchery/">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="117 2 14 15"
                     className="social-icon">
                  <path className="color-path"
                        d="M131 14.4c0 .9-.7 1.6-1.6 1.6h-10.8c-.9 0-1.6-.7-1.6-1.6V3.6c0-.9.7-1.6 1.6-1.6h10.8c.9 0 1.6.7 1.6 1.6v10.8zM128.3 9c0 2.4-1.9 4.3-4.3 4.3s-4.3-1.9-4.3-4.3c0-.4.1-.7.1-1.1h-1.2v5.9c0 .3.2.5.5.5h9.7c.3 0 .5-.2.5-.5V7.9h-1.2c.1.4.2.7.2 1.1zm-4.3 2.7a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4zm4.8-8.1h-1.6c-.3 0-.5.2-.5.5v1.6c0 .3.2.5.5.5h1.6c.3 0 .5-.2.5-.5V4.1c.1-.2-.2-.5-.5-.5z"
                        fill="#515252" fillRule="evenodd"></path>
                </svg>

              </a></div>
            </div>
          </nav>


        </div>



      </div>
    );
  }
}

CommonLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CommonLayout

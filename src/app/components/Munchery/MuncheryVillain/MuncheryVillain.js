import React from 'react'
import './MuncheryVillain.scss'

export const MuncheryVillain = () => (
  <div className="f-strata villain">
    <div className="fluid-container">
      <div className="row center-xy">
        <div className="phone-col-12 tablet-col-12 desktop-col-12 container">
          <h1>Join us at the table</h1>
          <p>Sign up now to take a look at our mouthwatering menus and find out what
            <span>we’re cooking up next.</span>
          </p>
          <div className="signup-login-form">
            <form className="email-squeeze-form" action="/menus/subscribe.json" acceptCharset="UTF-8"
                  data-remote="true" method="post"><input name="utf8" type="hidden" value="✓"/>
              <input type="hidden" name="bypass_email_requirement" id="bypass_email_requirement" value="1"/>

              <input type="hidden" name="_skip_confirmation_instructions" id="_skip_confirmation_instructions"
                     value="1"/>
              <input type="email" name="email" id="email" placeholder="Email" className="user-input email"
                     maxLength="254"/>
              <input type="text" name="zipcode" id="zipcode" maxLength="5" placeholder="ZIP Code"
                     className="user-input zip-code" inputMode="numeric" pattern="[\d\s\.()-]*"
                     autoCorrect="off"
                     autoCapitalize="none" noValidate="noValidate"/>
              <input type="hidden" name="gate" id="gate" value="Static Email Gate"/>
              <button name="button" type="submit" className="large orange button">See The Menu</button>

              <div className="errors">
                <div className="error-message email-error hidden">
                  Please enter a valid email address.
                </div>

                <div className="error-message zipcode-error hidden">
                  Please enter a 5-digit ZIP code.
                </div>

                <div className="error-message unknown-error hidden">
                  Error: please <a href="/support/">contact support</a>
                </div>
              </div>
            </form>
            <div className="or-separator">OR</div>

            <a
              href="/users/preauth/facebook.json?return=https%3A%2F%2Fmunchery.com%2Fmenus%2F&amp;signup=%2Fsignup-page%2Fconfirm"
              id="facebook_login_button" className="popup facebook-popup facebook large button" data-width="650"
              data-height="700">
              <span>Continue with Facebook</span>
            </a>

            <div className="terms">By clicking “See the Menu” or “Continue with Facebook” <br/>you agree to our
              <a className="secondary" target="_blank" href="/about/privacy-and-terms-of-service/">
                Terms &amp; Conditions
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
)

export default MuncheryVillain

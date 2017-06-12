import React from 'react'
import PropTypes from 'prop-types'
import CustomDatePicker from '../../../components/CustomDatePicker/CustomDatePicker'
import MenuFilter from '../../../components/MenuFilter/MenuFilter'
import MenuFilterMobile from '../../../components/MenuFilterMobile/MenuFilterMobile'
import Category from "../../../components/Category/Category";

class MenuPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let categoryElements = this.props.menuPage.categories.map((item, index) => <Category key={index} {...item} />);
    return (
      <div className="menu-view">
        <div className="non-details ng-scope">
          <div className="sticky-nav-bar" data-auto-show-guider="1"
               data-guider-clock-position="6" data-guider-offset-top="-45">
            <div className="menu-nav ng-scope">
              <div className="fluid-container full-width">
                <div className="row">

                  <div className="menu-nav-left">

                  </div>

                  <div className="menu-nav-center">
                    <CustomDatePicker />
                  </div>

                  <MenuFilter />
                  {/*<!-- .menu-filters-dropdown -->*/}
                  {/*<!-- .menu-nav-right -->*/}
                </div>
              </div>
            </div>
            {/*<!-- .menu-nav -->*/}

          </div>

          <div className="paginated-area">
            {/*<!-- ngIf: !M.MenuApp.MenuAppController.should_show_cutoff() -->*/}
            <div className="ng-scope">
              <div className="menu-announcement">
                <div className="current-banner ng-scope">

                  <div className="banners banner-animate-next">
                    <a className="banner banner-204 no-clickthru" href="javascript:void(0);" target="_self"
                       draggable="false"></a>

                  </div>

                </div>
              </div>

            </div>

            <MenuFilterMobile/>
            {/*<!-- .mobile-menu-filters-container -->*/}

            <div>
              <ul className="menu-pages">

                {/*<!-- ngRepeat: (page_number, page_data) in menu_pages -->*/}
                <li className="menu-page ng-scope current">

                  <ul className="meal-services">
                    {/*<!-- ngRepeat: (meal_service_name, meal_service) in page_data.menu.meal_services -->*/}
                    <li className="meal-service dinner">

                      {categoryElements}

                    </li>

                  </ul>

                </li>
              </ul>
            </div>

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

          </div>
        </div>

        <div className="detail-view offscreen ng-scope" style={{overflowY: 'hidden'}}>
          <div ></div>
          <div
          ></div>
        </div>

      </div>
    );
  }
}

MenuPage.propTypes = {
  //categorys: PropTypes.array.isRequired,
  getCategory: PropTypes.func.isRequired,
}

export default MenuPage

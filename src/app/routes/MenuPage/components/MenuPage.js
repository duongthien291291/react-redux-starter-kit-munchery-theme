import React from 'react'
import PropTypes from 'prop-types'

class MenuPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
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
    );
  }
}

MenuPage.propTypes = {
  //categorys: PropTypes.array.isRequired,
  getCategory: PropTypes.func.isRequired,
}

export default MenuPage

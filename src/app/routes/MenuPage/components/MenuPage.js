import React from 'react'
import PropTypes from 'prop-types'
import CustomDatePicker from '../../../components/CustomDatePicker/CustomDatePicker'
import MenuFilter from '../../../components/MenuFilter/MenuFilter'
import MenuFilterMobile from '../../../components/MenuFilterMobile/MenuFilterMobile'

class MenuPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
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

            {/*<!-- ngIf: M.MenuApp.MenuAppController.should_show_cutoff() -->*/}

            <div className="ng-scope">
              {/*<!-- ngIf: !!menu_pages[current_page] && !menu_pages[current_page].toc -->*/}

              <ul className="menu-pages">

                {/*<!-- ngRepeat: (page_number, page_data) in menu_pages -->*/}
                <li className="menu-page ng-scope current"
                    data-filters="" data-page-number="0">

                  <ul className="meal-services" data-current-meal-service="dinner">
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
                          <li className="menu-item ng-scope dairyfree eggfree passes-filters"
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
                                <span className="text ng-binding">Thai-Grilled Chicken Crunch Salad</span>
                                <span className="spicy"></span>
                                <span className="serves-1"></span>
                              </a>

                              <a className="item-description ng-binding"
                                 href="#/0/dinner/thai-grilled-chicken-crunch-salad/info">This salad is an ideal choice
                                if you're
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
                                <div className="price ng-scope ng-binding">
                                  $12.<sup className="ng-binding">75</sup>
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
                          <li className="menu-item ng-scope vegetarian passes-filters featured"
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
                                <span className="text ng-binding">Summer Penne Pesto</span>
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
                            className="menu-item ng-scope dairyfree eggfree passes-filters recently-added"
                            data-schedule-id="761613"
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
                                 href="#/0/dinner/harissa-grilled-chicken-1/info">Marinated in a red chili paste and
                                served
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
                            className="menu-item ng-scope dairyfree eggfree passes-filters recently-added"
                            data-schedule-id="761583"
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
                                 href="#/0/dinner/korean-pork-and-barley-bowl/info">This hearty grain bowl begins with a
                                base
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
                            className="menu-item ng-scope glutenfree dairyfree nutfree eggfree passes-filters qty-limited recently-added"
                            data-schedule-id="769369"
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
                                <span className="text ng-binding">Tuna &amp;
                                  Avocado Rice Bowl</span>
                                <span className="spicy"></span>
                                <span className="serves-2"></span>
                              </a>

                              <a className="item-description ng-binding"
                                 href="#/0/dinner/tuna-and-avocado-rice-bowl-2/info">Tuna steaks get pan-seared so
                                they’re
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
                                <span className="text ng-binding">Lemongrass Pork Banh Mi</span>
                                <span className="spicy"></span>
                                <span className="serves-2"></span>
                              </a>

                              <a className="item-description ng-binding"
                                 href="#/0/dinner/lemongrass-pork-banh-mi-5/info">The banh mi, the most beloved of the
                                Asian
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
                                 href="#/0/dinner/sweet-peppers-on-creamy-grits-3/info">Creamy, cheesy grits are the
                                starting
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
                                <span className="text ng-binding">Loaded Baked Potato</span>
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
                                <div className="price ng-scope ng-binding">
                                  $3.<sup className="ng-binding">95</sup>
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

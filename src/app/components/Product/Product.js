import React from 'react'
import PropTypes from 'prop-types'
// import Rating from '../Rating/Rating'
import { browserHistory } from 'react-router'

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {hover: false};
  }

  toggleHover = () => {
    this.setState({hover: !this.state.hover});
  };


  render() {
    const { id, name, categoryId, categoryName, menuId, imageUrl, oldPrice, price, quantity, ratingPoint, isNew } = this.props;
    let productDetailLocation = '/menus/' + menuId + '/detail/' + id
    return (
      <li className="menu-item ng-scope dairyfree eggfree passes-filters"
          data-schedule-id="761553"
          data-url="thai-grilled-chicken-crunch-salad">
        <a className="item-photo-container ng-scope"
           href="javascript:void(0);"
           onClick={() => browserHistory.push(productDetailLocation)}>

          <div className="photo item-photo" style={{backgroundImage: `url(${imageUrl})`}}>
          </div>

          {isNew ? (<div className="recently-added">NEW</div>) : ''}

        </a>

        <div className="details ng-scope">

          <div className="featured-source ng-binding visible">{name}
          </div>

          <a className="item-name" href="#/0/dinner/thai-grilled-chicken-crunch-salad/info">
            {isNew ? (<span className="recently-added">NEW</span>) : ''}
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
              ${price}
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

            <div className="status">
            </div>
          </div>
        </div>

      </li>
    );
  }
}

export default Product;

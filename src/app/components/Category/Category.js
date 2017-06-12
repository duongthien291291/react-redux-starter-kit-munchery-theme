import React from 'react'
import PropTypes from 'prop-types'
import CategoryHeader from '../CategoryHeader/CategoryHeader'
import Product from '../Product/Product'
import './Category.scss'

class Category extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {categoryName, categoryDescription, products} = this.props;
    let productElements;
    if (products && products.length > 0) {
      productElements = (
        <ul className="menu-items row">
          {products.map((k, index) => <Product key={index} {...k}  />)}
        </ul>
      );
    }
    else
      productElements = (
        <div className="no-items-prompt">
          Due to the filters you applied, we do not have any Kids that fit your dietary preferences. Clear filters to
          see all results.
          <a href="javascript:void(0);" className="">Clear Filters</a>
        </div>
      );

    return (
      <section className="menu-section fluid-container">
        <CategoryHeader name={categoryName} description={categoryDescription}/>

        {productElements}
      </section>
    );
  }
}

export default Category;

import React from 'react'
import PropTypes from 'prop-types'
import './CategoryHeader.scss'

class CategoryHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, description } = this.props;
    let descriptionElement;
    if (description)
      descriptionElement = (
        <div className="section-description">
          {description}
        </div>
      );

    return (
      <div className="menu-section-header">
        <div className="section-name">{name}</div>

        {descriptionElement}

      </div>
    );
  }
}

export default CategoryHeader;

import React from 'react'
import PropTypes from 'prop-types'

class MenuPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="contain-wrapp padding-bot50">

      </div>
    );
  }
}

MenuPage.propTypes = {
  //categorys: PropTypes.array.isRequired,
  getCategory: PropTypes.func.isRequired,
}

export default MenuPage

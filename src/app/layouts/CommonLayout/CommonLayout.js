import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/core.scss'
import './CommonLayout.scss'

class CommonLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {open: false};
  }

  render() {
    return (
      <div>thien</div>
    );
  }
}

CommonLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CommonLayout

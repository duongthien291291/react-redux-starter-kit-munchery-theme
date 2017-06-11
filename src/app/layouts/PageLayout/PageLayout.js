import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/core.scss'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className="">
    {children}
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default PageLayout

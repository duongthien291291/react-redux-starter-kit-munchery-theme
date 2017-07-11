import React from 'react'
import Header from '../../components/Header'
import './PageLayout.scss'
import '../../styles/core.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <Header />
    {children}
  </div>
)

PageLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default PageLayout

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './MenuFilterMobile.scss'

class MenuFilterMobile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {openFilter: false};
  }

  //handleNextClick(e) {
  //  let state = this.state;
  //  this.setState({...state, current_week: state.current_week + 1});
  //}

  toggleOpenFilter = () => {
    this.setState({openFilter: !this.state.openFilter});
  };

  render() {

    return (
      <div className="fluid-container ng-scope">
        <div className="row center-x">
          <div className="phone-col-12 tablet-col-12">

            <a className='expand-mobile-filters pull-right' data-filter-count="0" href="javascript:void(0);" onClick={() => this.toggleOpenFilter()}>
            </a>
          </div>
          <div className="phone-col-12 tablet-col-12">
            <div className={'mobile-menu-filters' + (this.state.openFilter ? ' open' : '')}>
              <ul>
                <li className="tag vegetarian">
                  <a href="javascript:void(0);">Vegetarian</a>
                </li>
                <li className="tag gluten-free">
                  <a href="javascript:void(0);">Gluten-Free</a>
                </li>
                <li className="tag dairy-free">
                  <a href="javascript:void(0);">Dairy-Free</a>
                </li>
                <li className="tag nut-free">
                  <a href="javascript:void(0);">Nut-Free</a>
                </li>
                <li className="tag vegan">
                  <a href="javascript:void(0);">Vegan</a>
                </li>
                <li className="tag egg-free">
                  <a href="javascript:void(0);">Egg-Free</a>
                </li>

                <li className="footer disabled">
                  <a className="clear-filters">Clear Filters</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
  menuFilter: state.menuFilter
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuFilterMobile)

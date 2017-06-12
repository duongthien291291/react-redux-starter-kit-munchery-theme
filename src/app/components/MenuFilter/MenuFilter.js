import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { goNextWeek, goPreviousWeek, chooseDay } from './MenuFilterReducer'
import './MenuFilter.scss'

class MenuFilter extends React.Component {
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

    let styleShowMenuFilter = {display: 'block'};

    return (
      <div className="menu-nav-right">

        <div className="nav-item menu-filters-button dropdown-open" data-dropdown="#menu-filters-dropdown" onClick={this.toggleOpenFilter}></div>

        <div id="menu-filters-dropdown"
             className="menu-filters-dropdown dropdown dropdown-relative has-icons dropdown-anchor-right notched-dropdown ng-scope"
             style={{top: '46px', display: 'block'}}>
          <ul className="dropdown-menu dropdown-menu-multiselect" style={(this.state.openFilter) ? styleShowMenuFilter : {}}>
            <div className="dropdown-notch"></div>

            <li className="tag vegetarian has-filter">
              <a href="javascript:void(0);">
                <div>Vegetarian</div>
              </a>
            </li>
            <li className="tag gluten-free has-filter">
              <a href="javascript:void(0);">
                <div>Gluten-Free</div>
              </a>
            </li>
            <li className="tag dairy-free has-filter">
              <a href="javascript:void(0);">
                <div>Dairy-Free</div>
              </a>
            </li>
            <li className="tag nut-free has-filter">
              <a href="javascript:void(0);">
                <div>Nut-Free</div>
              </a>
            </li>
            <li className="tag vegan has-filter">
              <a href="javascript:void(0);">
                <div>Vegan</div>
              </a>
            </li>
            <li className="tag egg-free has-filter">
              <a href="javascript:void(0);">
                <div>Egg-Free</div>
              </a>
            </li>

            <li className="footer disabled">
              <a className="clear-filters" href="javascript:void(0);">Clear Filters</a>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (state) => ({
  menuFilter: state.menuFilter
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuFilter)

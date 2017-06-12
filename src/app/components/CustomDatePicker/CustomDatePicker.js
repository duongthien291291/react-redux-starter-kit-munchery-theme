import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {goNextWeek, goPreviousWeek, chooseDay} from './CustomDatePickerReducer'
import './CustomDatePicker.scss'

class CustomDatePicker extends React.Component {
  constructor(props) {
    super(props)
    //this.state = {current_week: 0};
  }

  //handleNextClick(e) {
  //  let state = this.state;
  //  this.setState({...state, current_week: state.current_week + 1});
  //}

  //handlePreviousClick(e) {
  //  let state = this.state;
  //  this.setState({...state, current_week: state.current_week - 1});
  //}

  render() {
    //let dates = [
    //  { dayOfWeek: 'Sun', dayOfWeekMobile: 'Su', dateOfMonth: 14, selected: false, past: true, future: false },
    //  { dayOfWeek: 'Mon', dayOfWeekMobile: 'Mo', dateOfMonth: 15, selected: false, past: true, future: false },
    //  { dayOfWeek: 'Tue', dayOfWeekMobile: 'Tu', dateOfMonth: 16, selected: false, past: true, future: false },
    //  { dayOfWeek: 'Wen', dayOfWeekMobile: 'We', dateOfMonth: 17, selected: false, past: true, future: false },
    //  { dayOfWeek: 'Thu', dayOfWeekMobile: 'Th', dateOfMonth: 18, selected: false, past: true, future: false },
    //  { dayOfWeek: 'Fri', dayOfWeekMobile: 'Fr', dateOfMonth: 19, selected: true, past: false, future: false },
    //  { dayOfWeek: 'Sat', dayOfWeekMobile: 'Sa', dateOfMonth: 20, selected: false, past: false, future: true },
    //  { dayOfWeek: 'Sun', dayOfWeekMobile: 'Su', dateOfMonth: 21, selected: false, past: false, future: true },
    //  { dayOfWeek: 'Mon', dayOfWeekMobile: 'Mo', dateOfMonth: 22, selected: false, past: false, future: true },
    //  { dayOfWeek: 'Tue', dayOfWeekMobile: 'Tu', dateOfMonth: 23, selected: false, past: false, future: true },
    //  { dayOfWeek: 'Wen', dayOfWeekMobile: 'We', dateOfMonth: 24, selected: false, past: false, future: true },
    //  { dayOfWeek: 'Thu', dayOfWeekMobile: 'Th', dateOfMonth: 25, selected: false, past: false, future: true },
    //  { dayOfWeek: 'Fri', dayOfWeekMobile: 'Sa', dateOfMonth: 26, selected: false, past: false, future: true }
    //];

    let dateElements = this.props.customDatePicker.days.map((item, index) => (
      <li key={index}
          className={'date-container' + (item.selected ? ' selected' : '') + (item.past ? ' past' : '') + (item.future ? ' future' : '') + (item.sumQuantity == 0 ? ' closed' : '')}>
        <a href="javascript:void(0);" className="cutoff-date-option" data-index=""
           onClick={() => this.props.chooseDay(item.dateOfMonth)}>
          <div className="date">
            <div className="day-of-week mobile">
              {item.dayOfWeekMobile}
            </div>
            <div className="day-of-week desktop">
              {item.dayOfWeek}
            </div>
            <div className="day-of-month">
              {item.dateOfMonth}
            </div>
          </div>
        </a>
      </li>
    ));

    let datePickerDatesStyle = this.props.customDatePicker.current_week == 0 ? {
      width: '200%',
      transform: 'translateX(0%)'
    } : {width: '200%', transform: 'translateX(-50%)'};

    return (
      <div className="date-picker">
        <ul className="date-picker-dates" style={datePickerDatesStyle}>

          {dateElements}

        </ul>
        <div
          className={'week-changer previous-week' + (this.props.customDatePicker.current_week == 0 ? ' disabled' : '')}
          onClick={this.props.goPreviousWeek}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 18" fill="#F27242" className="dropdown-caret">
            <path
              d="M16.5 18c-.4 0-.8-.1-1.1-.4l-15-15C-.1 2-.1 1 .4.4 1-.1 2-.1 2.6.4l13.9 13.9L30.4.4c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-15 15c-.2.4-.6.5-1 .5z"></path>
          </svg>

        </div>
        <div className={'week-changer next-week' + (this.props.customDatePicker.current_week == 1 ? ' disabled' : '')}
             onClick={this.props.goNextWeek}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 18" fill="#F27242" className="dropdown-caret">
            <path
              d="M16.5 18c-.4 0-.8-.1-1.1-.4l-15-15C-.1 2-.1 1 .4.4 1-.1 2-.1 2.6.4l13.9 13.9L30.4.4c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-15 15c-.2.4-.6.5-1 .5z"></path>
          </svg>

        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  goNextWeek: () => goNextWeek(),
  goPreviousWeek: () => goPreviousWeek(),
  chooseDay: (value) => chooseDay(value)
}

const mapStateToProps = (state) => ({
  customDatePicker: state.customDatePicker
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomDatePicker)

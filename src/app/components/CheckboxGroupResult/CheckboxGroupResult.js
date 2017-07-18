import React, {Component} from 'react';
import {Field} from "redux-form";
import PropTypes from 'prop-types';
var Barcode = require('react-barcode');

export default class CheckboxGroupResult extends Component {

  render() {
    const {options} = this.props;
    debugger
    const checkboxes = options.map(({label, value, answers, checked}, index) => {

      let style = {};

      if (answers.includes(value))
        style = {'color': 'green'};
      if ((!answers.includes(value) && checked))
        style = {'color': 'red'};

      return (
        <div className="col-sm-12" key={`checkbox-${index}`}>
          <label style={style}>
            <input type="checkbox" name={`${name}[${index}]`} value={value} checked={checked} disabled={true}/>
            <span>{label}</span>
          </label>
        </div>
      )
    });

    return (
      <div>
        {checkboxes}
      </div>
      )

  }
}

import React, {Component} from 'react';
import {Field} from "redux-form";
import PropTypes from 'prop-types';
var Barcode = require('react-barcode');

export default class RadioGroup extends Component {

  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })).isRequired
  };

  field = ({input, meta, options}) => {

    const {name, onChange} = input;
    const {touched, error, submitting, warning } = meta;
    const inputValue = input.value;

    const checkboxes = options.map(({label, value, answers}, index) => {

      const handleChange = (event) => {
        const arr = [...inputValue];
        if (event.target.checked) {
          arr.splice(0, 1)
          arr.push(value);
        }
        else {
          arr.splice(arr.indexOf(value), 1);
        }
        return onChange(arr);
      };
      const checked = inputValue ? inputValue.includes(value) : false;
      let style = {};
      if(touched && warning){
        if(answers.includes(value))
          style = { 'color': 'green' };
        if((!answers.includes(value) && checked))
          style = { 'color': 'red' };
      }

      return (
        <div>
          <label key={`checkbox-${index}`} style={style}>
            <input type="checkbox" name={`${name}[${index}]`} value={value} checked={checked} onChange={handleChange}/>
            <span>{label}</span>
          </label>
          <Barcode value={'id' + value} />
        </div>
      );
    });

    return (
      <div>
        <div>{checkboxes}</div>
        {touched && error && <p className="error">{error}</p>}
      </div>
    );
  };

  render() {
    return <Field {...this.props} type="checkbox" component={this.field}/>;
  }
}

import React from "react";
import PropTypes from 'prop-types';

export class TextArea extends React.Component {

  handleChange(e) {
    const description = e.target.value;
    this.props.onChange(description);
  }

  render() {
    return (
      <div className="abb">
        <label>{this.props.label}</label>
        <textarea rows='4' cols='50' value={this.props.value} onChange={this.handleChange.bind(this)} className="bbb" type="text"/>
      </div>
    );
  }
}

TextArea.PropTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired

};

export default TextArea

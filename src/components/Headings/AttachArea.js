import React from "react";
import PropTypes from 'prop-types';

export class AttachArea extends React.Component {

  handleChange(e) {
    const fileInput = e.target.files[0];
    this.props.onChange(fileInput);
  }

  render() {
    return (
      <div className="abb">
        <label>{this.props.label}</label>
        <input onChange={this.handleChange.bind(this)} className="bbb" type="file"/>
      </div>
    );
  }
}

AttachArea.PropTypes = {
  label: PropTypes.string.isRequired,
  fileInput: PropTypes.string.isRequired

};

export default AttachArea

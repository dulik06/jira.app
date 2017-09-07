import React from "react";
import PropTypes from 'prop-types';

export class SubbmitBotton extends React.Component {
  render() {
    return (
      <div>
        <input type="submit" value="Submit" className="submit-button" disabled={this.props.disabled} />
      </div>
    );
  }
}

SubbmitBotton.PropTypes = {
  col: PropTypes.string.isRequired
};
export default SubbmitBotton;
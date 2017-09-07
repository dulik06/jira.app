import React from "react";
import PropTypes from "prop-types";

export class SelectionPriority extends React.Component {
  render() {
    return (
      <div className="selection_container">
        <select>
          <option value="lowest">Lowest</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    )
  }
}

export default SelectionPriority;
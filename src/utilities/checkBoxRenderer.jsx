import React, { Component } from "react";
import updateState from "./../components/tableComponent";

class CheckBoxRenderer extends Component {
  constructor(props) {
    super(props);
    this.checkHandler = this.checkHandler.bind(this);
  }

  checkHandler = (event) => {
    let checked = event.target.checked;
    let colId = this.props.column.colId;
    this.props.node.setDataValue(colId, checked);
    updateState(true);
  };

  render() {
    return (
      <input
        type="checkBox"
        checked={this.props.value}
        style={{ margin: "0px 0px 0px 30px", cursor: "pointer" }}
        onClick={this.checkHandler}
      ></input>
    );
  }
}

export default CheckBoxRenderer;

import React, { Component } from "react";

class NotifyBoxRenderer extends Component {
  constructor(props) {
    super(props);
    this.notifyCheckHandler = this.notifyCheckHandler.bind(this);
  }

  notifyCheckHandler = (event) => {
    let checked = event.target.checked;
    let colId = this.props.column.colId;
    //this.props.node.setDataValue(colId, checked);
  };

  render() {
    return (
      <input
        type="checkBox"
        checked={this.props.value}
        style={{ margin: "0px 0px 0px 30px", cursor: "pointer" }}
        onClick={this.notifyCheckHandler}
      ></input>
    );
  }
}

export default NotifyBoxRenderer;

import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

class CommentBoxRenderer extends Component {
  render() {
    return (
      <div
        id="inputBox"
        className="input-group mb-3"
        style={{ padding: "0px 0px 0px 0px" }}
      >
        <input
          id="commentBox"
          className="form-control"
          maxLength="50"
          style={{
            width: "70px",
            padding: "4px 0px 0px 0px",
            margin: "9px 0px 0px 0px",
          }}
        ></input>
      </div>
    );
  }
}

export default CommentBoxRenderer;

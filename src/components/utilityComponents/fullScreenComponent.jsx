import React, { Component } from "react";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";

class FullScreenComponent extends Component {
  state = {
    isFull: false,
  };

  render() {
    const { onRequest, onExit } = this.props;

    if (this.state.isFull == false)
      return (
        <div>
          <button
            className="btn btn-sm btn-flat-secondary"
            onClick={() => {
              this.setState({ isFull: true });
              onRequest();
            }}
          >
            <FullscreenIcon />
          </button>
        </div>
      );
    else
      return (
        <div>
          <button
            className="btn btn-sm btn-flat-secondary"
            onClick={() => {
              this.setState({ isFull: false });
              onExit();
            }}
          >
            <FullscreenExitIcon />
          </button>
        </div>
      );
  }
}

export default FullScreenComponent;

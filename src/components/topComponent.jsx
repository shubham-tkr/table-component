import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import FullScreenComponent from "./utils/fullScreenComponent";
import ExportComponent from "./utils/exportComponent";
import ValidateComponent from "./utils/validateComponent";
import InfoComponent from "./utils/infoComponent";

const TopComponent = (props) => {
  const { onExportClick, onValidateClick, onRequest, onExit } = props;

  return (
    <React.Fragment>
      <div className="d-flex">
        <div className="p-2 flex-grow-1">
          <h4 className="mb-0 text-truncate text-break line-height-normal mt-2">
            Risk Reporting Ratings Alerts
          </h4>
        </div>
        <div className="p-2">
          <FullScreenComponent onRequest={onRequest} onExit={onExit} />{" "}
        </div>
        <div className="p-2">
          <InfoComponent />
        </div>
      </div>

      <div className="d-flex">
        <div className="p-2 flex-grow-1">
          <p style={{ color: "#777777", fontWeight: "bold" }}>
            Select alerts in valid column, to validate them.
          </p>
        </div>
        <div className="p-2">
          <ValidateComponent onValidateClick={onValidateClick} />
        </div>
        <div className="p-2">
          <ExportComponent onExportClick={onExportClick} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopComponent;

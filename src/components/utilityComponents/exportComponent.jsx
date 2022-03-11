import React, { Component } from "react";
import SaveAlt from "@material-ui/icons/SaveAlt";

const ExportComponent = (props) => {
  return (
    <button
      className="btn btn-sm btn-flat-secondary"
      onClick={props.onExportClick}
    >
      <SaveAlt /> Export
    </button>
  );
};

export default ExportComponent;

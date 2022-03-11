import React, { Component } from "react";

const ValidateComponent = (props) => {
  return (
    <button
      className="btn btn-sm btn-secondary"
      onClick={props.onValidateClick}
      style={{ padding: "5px 10px 10px 5px" }}
      disable={props.validRowCountAtleastOne}
    >
      Validate
    </button>
  );
};

export default ValidateComponent;

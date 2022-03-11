import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { getTableInfo } from "../../data/tableInfo";

const InfoComponent = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  const info = getTableInfo();

  return (
    <React.Fragment>
      <button
        className="btn btn-sm btn-flat-secondary"
        onClick={handleClickToOpen}
      >
        <InfoOutlinedIcon />
      </button>
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{info.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{info.content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            className={"btn btn-dark"}
            onClick={handleToClose}
            color="primary"
          >
            Close
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default InfoComponent;

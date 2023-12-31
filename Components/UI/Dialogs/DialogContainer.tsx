import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/centralStore";
import { setOpenDialogBox } from "store/utilitySlice";

const DialogContainer = () => {
  const getOpenDialogBoxStatus = useSelector((state: RootState) => state.utilitySlice.getOpenDialogBoxStatus);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setOpenDialogBox(false));
  };
  return (
    <>
      <Dialog
        open={getOpenDialogBoxStatus}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Terms and Condition"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose} variant="contained" sx={{ marginRight: 3, marginBottom: 1 }}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogContainer;

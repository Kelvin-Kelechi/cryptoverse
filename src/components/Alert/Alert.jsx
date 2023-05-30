import React from "react";
import { CryptoState } from "../../CryptoContext";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

const Alert = () => {
  const { alert, setAlert } = CryptoState();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false });
  };
  return (
    <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
      <MuiAlert onClose={handleClose} elevation={6} severity={alert.type} variant="filled">
        {alert.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;

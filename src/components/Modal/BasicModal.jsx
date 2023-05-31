import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Login from "./Login/Login";
import SignUp from "./Signup/SignUp";
import GoogleButton from "react-google-button";
import { style, useBasicModalStyles } from "./styles";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { CryptoState } from "../../CryptoContext";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(0);
  const { setAlert,  } = CryptoState();
  const classes = useBasicModalStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const googleProvider = new GoogleAuthProvider();  
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setAlert({
          open: true,
          message: `Signed Up Successfully. Welcome ${res.user.email}`,
          type: "success",
        });
        handleClose();
      })
      .catch((error) => {
        setAlert({
          open: true,
          message: error.message,
          type: "error",
        });
        return;
      });
  };
  return (
    <div>
      <Button
        style={{
          width: 85,
          height: 40,

          backgroundColor: "#56F21B",
        }}
        onClick={handleOpen}
      >
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              variant="fullWidth"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Login" />
              <Tab label="Sign Up" />
            </Tabs>
          </Box>
          {value === 0 && <Login handleClose={handleClose} />}
          {value === 1 && <SignUp handleClose={handleClose} />}
          <div className={classes.google}>
            <span>OR</span>
            <GoogleButton
              style={{ width: "100%", outline: "none" }}
              onClick={signInWithGoogle}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}

import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { CryptoState } from "../../../CryptoContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

const SignUp = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");
  const { setAlert,  } = CryptoState();
  const handleSignUp = async () => {
    if (password !== comfirmPassword) {
      setAlert({
        open: true,
        message: "Password do not match",
        type: "error",
      });
      return;
    }
    if (!email || !password || !comfirmPassword) {
      setAlert({
        open: true,
        message: "Please fill all the fields",
        type: "error",
      });
      return;
    }
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      setAlert({
        open: true,
        message: `Signed Up Successfully. Welcome ${res.user.email}`,
        type: "success",
      });
      handleClose();
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
      return;
    }
  };
  return (
    <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: "20px" }}>
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Comfirm Password"
        type="password"
        value={comfirmPassword}
        onChange={(e) => setComfirmPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#56F21B" }}
        onClick={handleSignUp}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUp;

import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const SignUp = ({handleClose}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");
  const handleSignUp = () => {};
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
        style={{backgroundColor: "#56F21B"}}
        onClick={handleSignUp}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUp;

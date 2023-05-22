import React from "react";
import {
  AppBar,
  Container,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavbarStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";

const Navbar = () => {
  const classes = useNavbarStyles();
  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
      },
      mode: "dark",
    },
  });
  const { currency, setCurrency } = CryptoState();
  console.log(currency)
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              variant="h6"
              className={classes.title}
            >
              Crypto Hunter
            </Typography>
            <Select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              variant="outlined"
              className={classes.select}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"NGN"}>NGN</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
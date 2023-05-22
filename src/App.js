import { Route, Routes } from "react-router-dom";
import { Coin, Home } from "./pages";
import { Navbar } from "./components";
import { useStyles } from "./styles";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";
const theme = createTheme();
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins/:id" element={<Coin />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

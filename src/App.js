import { Route, Routes } from "react-router-dom";
import { Coin, Home } from "./pages";
import { Navbar } from "./components";
import { useStyles } from "./styles";
 
function App() {
 const classes = useStyles()
  return (
    <div className={classes.app}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<Coin />} />
      </Routes>
    </div>
  );
}

export default App;

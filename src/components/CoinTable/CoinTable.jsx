import axios from "axios";
import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import { CryptoState } from "../../CryptoContext";
import { ThemeProvider } from "@emotion/react";
import {
  Container,
  LinearProgress,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";

const CoinTable = () => {
  const [coins, setCoins] = useState();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const { currency } = CryptoState();
  const fetchCoinList = async () => {
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    console.log(data);
  };

  useEffect(() => {
    fetchCoinList();
  }, [currency]);
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
      },
      mode: "dark",
    },
  });
  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography variant="h4" style={{ margin: 18 }}>
          Cryptocurrency Prices by Market Cap
        </Typography>
        <TextField
          label="Search for a Crypto currency"
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "#56F21B" }} />
          ) : (
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: "#56F21B" }}>
                <TableRow>
                  {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
            </Table>
          )}
        </TableContainer>
      </Container>
    </ThemeProvider>
  );
};

export default CoinTable;

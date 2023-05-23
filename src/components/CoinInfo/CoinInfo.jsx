import axios from "axios";
import React, { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import { CryptoState } from "../../CryptoContext";
import { ThemeProvider } from "@emotion/react";
import { useCoinInfoStyles } from "./styles";
import { CircularProgress, createTheme } from "@mui/material";
import { Line } from "react-chartjs-2";

const CoinInfo = ({ coin }) => {
  const [days, setDays] = useState(1);
  const [historical, setHistorical] = useState();
  const classes = useCoinInfoStyles();
  const { currency } = CryptoState();
  const fetchHistoricalChart = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setHistorical(data.prices);
  };
   console.log("data", historical);
  useEffect(() => {
    fetchHistoricalChart();
  }, [currency, days]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
      },
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        {!historical ? (
          <CircularProgress
            thickness={1}
            size={250}
            style={{ color: "#56F21B" }}
          />
        ) : (
          <>
            <Line
              data={{
                 labels: historical.map((coin)=>{

                 })
              }}
            />
          </>
        )}
      </div>{" "}
    </ThemeProvider>
  );
};

export default CoinInfo;

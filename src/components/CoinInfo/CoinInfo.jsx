import axios from "axios";
import React, { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import { CryptoState } from "../../CryptoContext";
import { ThemeProvider } from "@emotion/react";
import { useCoinInfoStyles } from "./styles";
import { Button, CircularProgress, createTheme } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import SelectButton from "../SelectButton/SelectButton";
import { chartDays } from "./data";

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
            style={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: historical?.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historical?.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#56F21B",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays?.map((day) => (
                
                <button
                  className={
                    day.value === days ? classes.active : classes.links
                  }
                  key={day.value}
                  onClick={() => {
                    setDays(day.value);
                  }}
                >
                  {day.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo;

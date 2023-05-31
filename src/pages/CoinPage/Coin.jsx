import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";
import axios from "axios";
import { SingleCoin } from "../../components/config/api";
import CoinInfo from "../../components/CoinInfo/CoinInfo";
import { useCoinStyles } from "./styles";
import { Button, LinearProgress, Typography } from "@mui/material";
import ReactHtmlParser from "react-html-parser";
import { numberWithCommas } from "../../components/CoinTable/CoinTable";

const Coin = () => {
  const classes = useCoinStyles();
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol, user } = CryptoState();
  const fetchSingleCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
    console.log(data);
  };
  useEffect(() => {
    fetchSingleCoin();
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "#56F21B" }} />;

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          style={{ marginBottom: 20 }}
          height="200"
        />
        <Typography variant="h3" className={classes.heading}>
          {coin?.name}
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.description}
        >
          {coin?.description.en.split(". ")[0]}.
        </Typography>
        <div className={classes.marketData}>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className={classes.heading}>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
          {user && (
            <Button
              variant="outlined"
              style={{
                width: "100%",
                height: "40px",
                backgroundColor: "#56F21B",
              }}
            >
              Add To Watchlist
            </Button>
          )}
        </div>
      </div>
      <CoinInfo coin={coin} />
    </div>
  );
};

export default Coin;

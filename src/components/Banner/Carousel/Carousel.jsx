import React, { useEffect, useState } from "react";
import { useCarouselStyles } from "./styles";
import axios from "axios";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../../CryptoContext";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const Carousel = () => {
  const classes = useCarouselStyles();
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();
  //   const headers = {
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer/token",
  //   };
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    console.log(data);
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const items = trending.map((coin) => {
    const profit = coin?.price_change_percentage_24h >= 0;

    return (
      <Link to={`/coins/${coin.id}`} className={classes.carouselItem}>
        <img
          src={coin.image}
          alt={coin.name}
          height="80px"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{ color: profit > 0 ? "#56F21B" : "red", fontWeight: 500 }}
          >
            {profit && "+"}
            {coin?.price_change_percentage_24h.toFixed(2)}%
          </span>
        </span>
        <span className={classes.price}>
          {symbol}
          {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Carousel;

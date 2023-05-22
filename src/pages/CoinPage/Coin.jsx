import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";
import axios from "axios";
import { SingleCoin } from "../../components/config/api";

const Coin = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();
  const fetchSingleCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
    console.log(data)
  };
  useEffect(() => {
    fetchSingleCoin();
  }, []);

  return <div>Coin</div>;
};

export default Coin;

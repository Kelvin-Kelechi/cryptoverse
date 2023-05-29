import React, { createContext, useContext, useEffect, useState } from "react";
import { CoinList } from "./components/config/api";
import axios from "axios";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("NGN");
  const [symbol, setSymbol] = useState("₦");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    type:'success'
  });


  const fetchCoinList = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    console.log(data);
    setLoading(false);
  };

  useEffect(() => {
    if (currency === "NGN") {
      setSymbol("₦");
    } else if (currency === "USD") {
      setSymbol("$");
    }
  }, [currency]);

  return (
    <Crypto.Provider
      value={{ currency, symbol, setCurrency, coins, loading, fetchCoinList , setAlert, alert}}
    >
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};

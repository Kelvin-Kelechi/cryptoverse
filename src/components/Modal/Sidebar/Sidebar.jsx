import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { CryptoState } from "../../../CryptoContext";
import { useSidebarStyles } from "./styles";
import { signOut } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { numberWithCommas } from "../../CoinTable/CoinTable";
import { MdDelete } from "react-icons/md";
import { doc, setDoc } from "firebase/firestore";

const Sidebar = () => {
  const [state, setState] = React.useState({
    right: false,
  });
  const { user, setAlert, coins, watchlist, symbol } = CryptoState();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const classes = useSidebarStyles();

  const logout = () => {
    signOut(auth);
    setAlert({
      open: true,
      message: "Logged Out Successfully",
      type: "success",
    });
    toggleDrawer();
  };
  const removeFromWatchlist = async (coin) => {
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        coinRef,
        {
          coins: watchlist.filter((watch) => watch !== coin?.id),
        },
        {
          merge: "true",
        }
      );
      setAlert({
        open: true,
        message: `${coin.name} Removed from the Watchlist !`,
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
      return;
    }
  };

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar
            onClick={toggleDrawer(anchor, true)}
            style={{
              height: 38,
              width: 38,
              marginLeft: 15,
              cursor: "pointer",
              backgroundColor: "#56F21B",
            }}
            src={user.photoURL}
            alt={user.displayName || user.email}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className={classes.container}>
              <div className={classes.profile}>
                <Avatar
                  style={{
                    height: 38,
                    width: 120,
                    height: 120,
                    cursor: "pointer",
                    backgroundColor: "#56F21B",
                    objectFit: "contain",
                  }}
                  src={user.photoURL}
                  alt={user.displayName || user.email}
                />
                <span className={classes.username}> {user.email} </span>
                <div className={classes.watchlist}>
                  <span
                    style={{
                      fontSize: 15,
                      textShadow: " 0 0 5px black",
                    }}
                  >
                    watchlist
                  </span>
                  {coins.map((coin) => {
                    if (watchlist.includes(coin.id)) {
                      return (
                        <div className={classes.coin}>
                          <span>{coin.name}</span>
                          <span style={{ display: "flex", gap: 8 }}>
                            {symbol}
                            {numberWithCommas(coin.current_price.toFixed(2))}
                            <MdDelete
                              fontSize={16}
                              style={{ cursor: "pointer" , color:'#ff0000'}}
                              onClick={() => removeFromWatchlist(coin)}
                            />
                          </span>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              <Button
                variant="contained"
                onClick={logout}
                style={{
                  height: "8%",
                  width: "100%",
                  backgroundColor: "#56F21B",
                  marginTop: 20,
                  fontWeight: "bold",
                }}
              >
                Log Out
              </Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
export default Sidebar;

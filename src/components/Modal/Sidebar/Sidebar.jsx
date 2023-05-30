import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { CryptoState } from "../../../CryptoContext";
import { useSidebarStyles } from "./styles";

const Sidebar = () => {
  const [state, setState] = React.useState({
    right: false,
  });
  const { user } = CryptoState();

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

  const logout = () => {};
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
                <span className={classes.username}>
                  {" "}
                  {user.photoURL || user.email}{" "}
                </span>
                <div className={classes.watchlist}>
                  <span
                    style={{
                      fontSize: 15,
                      textShadow: " 0 0 5px black",
                    }}
                  >
                    watchlist
                  </span>
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

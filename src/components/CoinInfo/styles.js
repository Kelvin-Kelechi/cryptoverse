import { makeStyles } from "@mui/styles";

export const useCoinInfoStyles = makeStyles((theme) => ({
  container: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    padding: 40,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: 0,
      padding: 20,
      paddingTop: 0,
    },
  },
  button: {
    display: "flex",
    marginTop: 20,
    justifyContent: "space-around",
    width: "100%",
  },
  links: {
    border: "1px solid #56F21B",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    cursor: "pointer",
    backgroundColor: "inherit",
    color: "#fff",
    fontWeight: 700,
    "&:hover": {
      backgroundColor: "#56F21B",
      color: "black",
    },
    width: "22%",
    //   margin: 5,
  },

  active: {
    border: "1px solid #56F21B",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    cursor: "pointer",
    backgroundColor: "#56F21B",
    color: "black",
    fontWeight: 500,
    width: "22%",
  },
}));

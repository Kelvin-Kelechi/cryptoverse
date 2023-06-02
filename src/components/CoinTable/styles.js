import { makeStyles } from "@mui/styles";

export const useCoinTableStyles = makeStyles((theme) => ({
  row: {
    backgroundColor: "#16171a",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#131111",
    },
    fontFamily: "Montserrat",
  },
  pagination1: {
    display: "flex",
    padding: 20,
    justifyContent: "center",
    width: "100%",
  },
  pagination: {
    "& .Mui-selected": {
      color: "#56F21B",
    },
  },
  title: {
    // fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
}));

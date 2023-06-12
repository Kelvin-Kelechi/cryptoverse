import { makeStyles } from "@mui/styles";

export const useNavbarStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "#56F21B",
    cursor: "pointer",
    fontWeight: "bold",
    fontFamily: " Helvetica Neue",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      marginRight: "10px",
    },
  },
  select: {
    width: 100,
    height: 40,
    marginRight: 15,
  },
}));
 
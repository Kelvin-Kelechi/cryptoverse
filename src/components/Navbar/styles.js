import { makeStyles } from "@mui/styles";

export const useNavbarStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "#56F21B",
    cursor: "pointer",
    fontWeight: "bold",
    fontFamily:''
  },
  select: {
    width: 100,
    height: 40,
    marginRight:15,
  },
}));

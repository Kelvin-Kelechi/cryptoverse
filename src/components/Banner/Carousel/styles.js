import { makeStyles } from "@mui/styles";

export const useCarouselStyles = makeStyles(() => ({
  carousel: {
    height: "50%",
    alignItems: "center",
    display: "flex",
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white",
    textDecoration: "none",
  },
  price: {
    fontSize: 22,
    fontWeight: 500,
  },
}));

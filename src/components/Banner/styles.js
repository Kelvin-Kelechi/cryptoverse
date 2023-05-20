const { makeStyles } = require("@mui/styles");

export const useBannerStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 15,
  },
  title2: {
    color: "darkgray",
    textTransform: "capitalize",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

import React from "react";
import { useBannerStyles } from "./styles";
import { Container, Typography } from "@mui/material";
import Carousel from "./Carousel/Carousel";

const Banner = () => {
  const classes = useBannerStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography variant="h2" className={classes.title}>
            Crypto Hunter
          </Typography>
          <Typography variant="subtitle2" className={classes.title}>
            {" "}
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;

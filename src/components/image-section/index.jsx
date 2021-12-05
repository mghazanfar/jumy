import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import item from "../../assets/item.png";

const useStyles = makeStyles((theme) => ({
  leftImage: {
    width: "100%",
  },
}));

export const ImageSection = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item md={6}>
        <img src={item} alt="left-item" className={classes.leftImage} />
      </Grid>
      <Grid item md={6}>
        right
      </Grid>
    </Grid>
  );
};

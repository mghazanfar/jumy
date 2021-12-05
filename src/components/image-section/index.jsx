import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import item from "../../assets/item.png";
import { SectionDetail } from "../section-detail";
import { SectionHistory } from "../section-history";

const useStyles = makeStyles((theme) => ({
  leftImage: {
    width: "100%",
  },
}));

export const ImageSection = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" spacing={10}>
      <Grid item md={6}>
        <img src={item} alt="left-item" className={classes.leftImage} />
        <Box mt={5}>
            <SectionDetail />
        </Box>
      </Grid>
      <Grid item md={6}>
        <SectionHistory />
      </Grid>
    </Grid>
  );
};

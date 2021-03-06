import { Box, ButtonBase, makeStyles } from "@material-ui/core";
import { ArrowUpward } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  linkContainer: {
    [theme.breakpoints.down("sm")]: {
      flexDirection:"column",
      textAlign:'center',
      alignItems:"center",
      '& div':{
        marginBottom:24
      }
    }
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <Box bgcolor="black" p={5} position="relative">
      <Box
        fontSize={56}
        fontFamily="GilroySemiBold"
        lineHeight="67.2px"
        letterSpacing="-0.05em"
        textAlign="center"
        color="white"
        mt={10}
      >
        Are you an artist?
      </Box>
      <Box textAlign="center" mt={5} mb={19}>
        <Box
          component={ButtonBase}
          fontFamily="GilroySemiBold"
          color="black !important"
          bgcolor="#FFFFFF !important"
          width={235}
          height={56}
          textAlign="center"
          fontSize={16}
          lineHeight={"16px"}
        >
          Tell us about you
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between"className={classes.linkContainer}>
        <Box
          fontSize={14}
          lineHeight={"19.6px"}
          fontFamily="GilroyMedium"
          letterSpacing="-0.01em"
          color="white"
          width={247}
        >
          The Offices 4, One Central <br/>Dubai, United Arab Emirates
        </Box>
        <Box
          fontSize={24}
          lineHeight={"28.8px"}
          fontFamily="GilroySemiBold"
          letterSpacing="-0.05em"
          color="white"
        >
          hello@jumy.co
        </Box>
        <Box
          fontSize={16}
          lineHeight={"16px"}
          fontFamily="GilroySemiBold"
          color="white"
          display="flex"
        >
          <Box>Instagram</Box>
          <Box mx={5}>Twitter</Box>
          <Box>Medium</Box>
        </Box>
      </Box>
    
      <Box
          height={"1px"}
          mt={9}
          position="absolute"
          left={0}
          right={0}
          bgcolor="#151515"
        />
      <Box display="flex" justifyContent="space-between" mt={9} pt={5}className={classes.linkContainer}>
        <Box
          fontSize={14}
          lineHeight={"19.6px"}
          fontFamily="GilroyMedium"
          letterSpacing="-0.01em"
          color="white"
          width={191}
        >
          All right reserved.
        </Box>
        <Box
          fontSize={24}
          lineHeight={"28.8px"}
          fontFamily="GilroySemiBold"
          letterSpacing="-0.05em"
          color="white"
        >
          <ArrowUpward />
        </Box>
        <Box
          fontSize={16}
          lineHeight={"16px"}
          fontFamily="GilroySemiBold"
          color="white"
          display="flex"
        >
          <Box>FAQ</Box>
          <Box mx={5}>Terms</Box>
          <Box>Policy</Box>
        </Box>
      </Box>
    
    </Box>
  );
};

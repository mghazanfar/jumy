import React from "react";
import { Avatar, Box, ButtonBase, makeStyles } from "@material-ui/core";
import { CallMade, Check, Instagram, Twitter } from "@material-ui/icons";
import item from "../../assets/item.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 64,
    height: 64,
  },
  boxImage: {
    width: "100%",
    height: "100%",
  },
  footer:{
    [theme.breakpoints.down('md')]:{
      flexDirection:'column',
      alignItems:"center"
    }
  }
}));

export const SectionDetail = () => {
  const classes = useStyles();
  return (
    <>
      <Box border="1px solid #F2F2F2" p={4} position="relative" pb={0}>
        <Box display="flex" justifyContent="space-between" className={classes.footer}>
          <Box display="flex">
            <Box mr={3} position="relative">
              <Avatar
                src="https://v4.mui.com/static/images/avatar/2.jpg"
                className={classes.avatar}
              />
              <Box
                bgcolor="black"
                display="flex"
                justifyContent="center"
                alignItems="center"
                border="2px solid white"
                color="white"
                borderRadius="50%"
                height={24}
                width={24}
                fontSize="9px"
                position="absolute"
                bottom={-5}
                right={-5}
              >
                <Check style={{ width: 16, height: 16 }} />
              </Box>
            </Box>
            <Box>
              <Box
                fontFamily="GilroySemiBold"
                fontSize="24px"
                letterSpacing="-0.05em"
                lineHeight="28.8px"
              >
                Jumaker
              </Box>
              <Box
                fontFamily="GilroyMedium"
                fontSize="16px"
                letterSpacing="-0.01em"
                lineHeight="22.4px"
                color="#979797"
              >
                @Jumaker
              </Box>
            </Box>
          </Box>
          <Box
            fontFamily="GilroyMedium"
            fontSize="16px"
            letterSpacing="-0.01em"
            lineHeight="22.4px"
            color="#575757"
            maxWidth="54%"
          >
            Jumaker is a contemporary digital Artist with a unique signature and
            very authentic genr...{" "}
          </Box>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
          mt={4}
        >
          <Box width={134} height={134} mb={4}>
            <img
              src={
                "https://2.bp.blogspot.com/_vl9jVqDIpKk/TJotYAU55gI/AAAAAAAAArs/5pH4xm8kyDw/s1600/van-gogh-vincent-starry-night.jpg"
              }
              alt="img"
              className={classes.boxImage}
            />
          </Box>
          <Box width={134} height={134} mb={4}>
            <img
              src={
                "https://art-educ4kids.weebly.com/uploads/8/9/6/9/8969100/6893955_orig.jpg?707"
              }
              alt="img"
              className={classes.boxImage}
            />
          </Box>
          <Box width={134} height={134} mb={4}>
            <img src={item} alt="img" className={classes.boxImage} />
          </Box>
          <Box width={134} height={134} mb={4}>
            <img
              src={
                "https://mediaoffice.ae/-/media/2015/art-dubai-p.jpg?h=2333&w=3500&hash=E43D435902BA66877F24BC7473C24A4D"
              }
              alt="img"
              className={classes.boxImage}
            />
          </Box>
        </Box>
        <Box
          height={"1px"}
          mt={4}
          position="absolute"
          left={0}
          right={0}
          bgcolor="#F2F2F2"
        />
        <Box mt={4} justifyContent="space-between" display="flex" className={classes.footer}>
          <Box display="flex" mt={4} alignItems="center">
            <Box display="flex" alignItems="center">
              <Instagram />
              <Box ml={1} fontFamily="GilroySemiBold" fontSize="16px">@Jumaker</Box>
            </Box>

            <Box display="flex" ml={3} alignItems="center">
              <Twitter />
              <Box ml={1} fontFamily="GilroySemiBold" fontSize="16px">@Jumaker</Box>
            </Box>
          </Box>



          <Box display="flex" mt={4} alignItems="center">
              <Box component={ButtonBase} bgcolor="black" width={144} height={40} textAlign="center" color="white" fontFamily="GilroySemiBold">Follow</Box>

            <Box display="flex" ml={3} color="#979797">
              <CallMade />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

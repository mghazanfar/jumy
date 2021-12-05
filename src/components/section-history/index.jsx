import { Box, ButtonBase, makeStyles } from '@material-ui/core';
import React from 'react';
import logo from '../../assets/color-logo.png'
import { burger } from '../icons';

const useStyles = makeStyles((theme) => ({
  logo: {
    width: 64,
    height: 64,
  },
}));

export const SectionHistory = () => {
    const classes = useStyles()
    return <Box mt={4}>
        <Box fontSize={16} fontFamily="GilroySemiBold" lineHeight="22.4px">Edition 4/4</Box>
        <Box display="flex" justifyContent="space-between">
            <Box fontSize={48} fontFamily="GilroySemiBold" lineHeight="55.2px" letterSpacing="-0.05em" mt={1}>Resting Refugee</Box>
            <img src={logo} alt="logo" className={classes.logo} />
        </Box>
        <Box maxWidth="70%" fontSize={16} fontFamily="GilroyMedium" lineHeight="22.4px" letterSpacing="-0.01em" mt={1.5}>Resting refuge translates the symbiotic relationship between colors and nature. </Box>
        <Box display="flex" justifyContent="space-between" mt={4}>
            <Box>
                <Box bgcolor="black" p={1} borderRadius={17} color='white' fontSize={10} fontFamily="GilroySemiBold" lineHeight={"10px"}>CURRENT BID</Box>
                <Box display="flex" mt={2} alignItems="center">
                    <Box>{burger}</Box>
                    <Box ml={1}fontSize={32} fontFamily="GilroySemiBold" lineHeight="38.4px" letterSpacing="-0.05em" >3.50 ETH</Box>
                </Box>
                <Box fontSize={16} fontFamily="GilroyMedium" lineHeight="22.4px" letterSpacing="-0.01em" color="#979797">$ 10.000 USD</Box>
            </Box>


            <Box>
                <Box bgcolor="black" p={1} borderRadius={17} color='white' fontSize={10} fontFamily="GilroySemiBold" lineHeight={"10px"} display="inline">ENDS IN</Box>
                <Box display="flex" mt={2}>
                    <Box>
                        <Box fontSize={32} fontFamily="GilroySemiBold" lineHeight="38.4px" letterSpacing="-0.05em" >19</Box>
                        <Box fontSize={16} fontFamily="GilroyMedium" lineHeight="22.4px" letterSpacing="-0.01em" color="#979797">hours</Box>
                    </Box>
                    <Box mx={3}>
                        <Box fontSize={32} fontFamily="GilroySemiBold" lineHeight="38.4px" letterSpacing="-0.05em" >26</Box>
                        <Box fontSize={16} fontFamily="GilroyMedium" lineHeight="22.4px" letterSpacing="-0.01em" color="#979797">minutes</Box>
                    </Box>
                    <Box>
                        <Box fontSize={32} fontFamily="GilroySemiBold" lineHeight="38.4px" letterSpacing="-0.05em" >32</Box>
                        <Box fontSize={16} fontFamily="GilroyMedium" lineHeight="22.4px" letterSpacing="-0.01em" color="#979797">seconds</Box>
                    </Box>
                </Box>
            </Box>

        </Box>
        <Box component={ButtonBase} bgcolor="black" width={'100%'} height={56} textAlign="center" color="white" fontFamily="GilroySemiBold" mt={4}>Cancel Sale</Box>

        
    </Box>
}
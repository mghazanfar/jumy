import { Avatar, Box } from "@material-ui/core";
import { CallMade, Check } from "@material-ui/icons";
import React from "react";
const historyData = [
    {src:"https://v4.mui.com/static/images/avatar/1.jpg",username:"felica", bid:"3.15 ETH", time:"10 minutes ago"},
    {src:"https://v4.mui.com/static/images/avatar/2.jpg",username:"dropbeat", bid:"6.15 ETH", time:"20 minutes ago"},
    {src:"https://v4.mui.com/static/images/avatar/3.jpg",username:"brianhold", bid:"0.15 ETH", time:"25 minutes ago"},
    {src:"https://v4.mui.com/static/images/avatar/1.jpg",username:"felica", bid:"1.15 ETH", time:"28 minutes ago"},
    {src:"https://v4.mui.com/static/images/avatar/2.jpg",username:"brianhold", bid:"9.15 ETH", time:"30 minutes ago"},
    {src:"https://v4.mui.com/static/images/avatar/3.jpg",username:"dropbeat", bid:"8.15 ETH", time:"34 minutes ago"},
    {src:"https://v4.mui.com/static/images/avatar/1.jpg",username:"felica", bid:"2.15 ETH", time:"50 minutes ago"},
    {src:"https://v4.mui.com/static/images/avatar/2.jpg",username:"brianhold", bid:"1.15 ETH", time:"59 minutes ago"},
]

const HistoryItem = ({src,username, bid,time}) => {
  return (
    <Box display="flex" justifyContent="space-between" mb={4}>
      <Box display="flex">
        <Box mr={3} position="relative">
          <Avatar src={src} />
          <Box
            bgcolor="black"
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="2px solid white"
            color="white"
            borderRadius="50%"
            height={20}
            width={20}
            fontSize="9px"
            position="absolute"
            bottom={5}
            right={-10}
          >
            <Check style={{ width: 16, height: 16 }} />
          </Box>
        </Box>
        <Box>
          <Box display="flex">
            <Box fontSize={16} fontFamily="GilroySemiBold" lineHeight="22.4px">
              @{username}{" "}
            </Box>
            <Box
              fontSize={16}
              fontFamily="GilroyMedium"
              lineHeight="22.4px"
              letterSpacing="-0.01em"
              mx={1}
            >
              made a bid for{" "}
            </Box>
            <Box fontSize={16} fontFamily="GilroySemiBold" lineHeight="22.4px">
              {bid}{" "}
            </Box>
          </Box>
          <Box
            fontSize={14}
            fontFamily="GilroyMedium"
            lineHeight="19.6px"
            letterSpacing="-0.01em"
            color="#979797"
          >
            {time}
          </Box>
        </Box>
      </Box>
      <Box display="flex" color="#979797">
        <CallMade />
      </Box>
    </Box>
  );
};


export const History = () => {
  return (
    <Box p={4} border="1px solid #F2F2F2" pb={0}>
      <Box
        fontSize={24}
        fontFamily="GilroySemiBold"
        lineHeight="28.8px"
        letterSpacing="-0.05em"
      >
        History
      </Box>
      <Box height={530} style={{ overflowY: "auto" }} mt={2}>
        {historyData.map(item=><HistoryItem {...item}/>)}
      </Box>
    </Box>
  );
};

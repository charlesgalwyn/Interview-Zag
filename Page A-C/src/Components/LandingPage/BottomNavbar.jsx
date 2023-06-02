import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { black } from "../../Utils";

const iconData = [
  { image: "homeIcon.png", title: "Home" },
  { image: "cart.png", title: "Cart" },
  { image: "notification.png", title: "Notification" },
  { image: "profile.png", title: "Profile" },
];
const BottomNavbar=()=>{
  const [iconState, setState] = useState(3);
  return (
    <Box
      position={"fixed"}
      bottom={0}
      zIndex={11}
      border={"1px solid re"}
      w={"100%"}
      h={"70px"}
      bg={"#fff"}
      display={"block"}
      borderRadius={"30px 30px 0px 0px"}
      boxShadow={"0px -2px 7px 2px rgba(0, 0, 0, 0.1)"}
      p={"15px"}
    >
      <Box
        border={"1px solid re"}
        w={"90%"}
        m={"auto"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={"4px"}
          border={"1px solid re"}
          bg={"#EEEEEE"}
          borderRadius={"30px"}
          p={"0 10px 0 0"}
          cursor={"pointer"}
        >
          <Box
            border={"1px solid re"}
            height={"30px"}
            w={"30px"}
            bg={black}
            borderRadius={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image src="homeIcon.png" />
          </Box>
          <Box>
            <Text fontSize={"14px"} fontWeight={600} >
              Home
            </Text>
          </Box>
        </Box>
        <Box ml={"-12px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Image src="cart.png" cursor={"pointer"} />
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Image src="notification.png" cursor={"pointer"} />
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Image src="profile.png" cursor={"pointer"} />
        </Box>
      </Box>
    </Box>
  );
}

export default BottomNavbar;
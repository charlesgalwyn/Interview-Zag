import React from "react";
import { Box } from "@chakra-ui/react";
import TopMenu from "./TopMenu";
import ProfilePic from "./ProfilePic";

const MenuAvatar=()=> {
  return (
    <Box
      border={"1px solid blac"}
      
      p={"53px 25px 0px 25px"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <TopMenu />
      <ProfilePic />
    </Box>
  );
}

export default MenuAvatar;
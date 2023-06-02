import { Box, Image } from "@chakra-ui/react";
import React from "react";

function Profilepic() {
  return (
    <Box
      borderRadius={"50%"}
      w={"56px"}
      height={"56px"}
      border={"1px solid re"}
      bg={"#dddddd"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image src="avatar.png" cursor={"pointer"} />
    </Box>
  );
}

export default Profilepic;

import React from "react";
import LeftPart from "../Components/LeftPart";
import {Box,Accordion} from "@chakra-ui/react";
import AddOrder from "../Components/RightPart/AddOrder";
import Products from "../Components/RightPart/Products";
import Issuses from "../Components/RightPart/Issuse Part";

const Workspace=()=> {
  return (
    <LeftPart>
      <AddOrder />
      <Box h={"1px"} background={"rgba(0, 0, 0, 0.1)"} mt={"20px"}></Box>
      <Accordion
        bg={"#f9f9f9"}
        defaultIndex={[0]}
        allowMultiple
        border={"1px solid re"}
        borderRadius={"20px"}
        my={"20px"}
      >
        <Products />

        <Issuses />
      </Accordion>
    </LeftPart>
  );
}

export default Workspace;
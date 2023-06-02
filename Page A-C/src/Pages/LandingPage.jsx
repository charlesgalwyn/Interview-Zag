import { Box } from "@chakra-ui/react";
import React from "react";
import MenuAvatar from "../Components/LandingPage/MenuAvatar";
import Welcome from "../Components/LandingPage/Welcome";
import SearchBar from "../Components/LandingPage/SearchBar";
import BottomNavbar from "../Components/LandingPage/BottomNavbar";
import Precentoffer from "../Components/LandingPage/50percent";
import ProductsMapping from "../Components/LandingPage/ProductsMapping";

const LandingPage=()=> {
  return (
    <Box>
      <MenuAvatar />
      <Welcome />
      <SearchBar />
      <Precentoffer/>
      <ProductsMapping/>
      <BottomNavbar />
    </Box>
  );
}

export default LandingPage;

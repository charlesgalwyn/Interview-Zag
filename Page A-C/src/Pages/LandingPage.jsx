import { Box } from "@chakra-ui/react";
import React from "react";
import MenuAvatar from "../Components/LandingPage/MenuAvatar";
import Welcome from "../Components/LandingPage/Welcome";
import SearchBar from "../Components/LandingPage/SearchBar";
import BottomNavbar from "../Components/LandingPage/BottomNavbar";
import ProductsMapping from "../Components/LandingPage/ProductsMapping";
import ProductCarousel from "../Components/LandingPage/ProductCarousel";

const LandingPage=()=> {
  return (
    <Box>
      <MenuAvatar />
      <Welcome />
      <SearchBar />
      <ProductCarousel/>
      <ProductsMapping/>
      <BottomNavbar />
    </Box>
  );
}

export default LandingPage;

import { Box } from "@chakra-ui/react";
import React from "react";
import ProductImage from "../Components/ProductDetailsPage/ProductImage";
import ProductDescription from "../Components/ProductDetailsPage/ProductDescription";

const ProductDetailsPage=()=> {
  return (
    <Box>
      <ProductImage />
      <ProductDescription/>
    </Box>
  );
}

export default ProductDetailsPage;

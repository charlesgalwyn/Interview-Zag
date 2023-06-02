import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import PaymentPage from "../Pages/PaymentPage";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product" element={<ProductDetailsPage />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
}

export default AllRoutes;

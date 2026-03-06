import { Routes, Route } from "react-router-dom";
import ProductsPage from "../pages/ProductPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import LandingPage from "@/pages/LandingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRoutes;
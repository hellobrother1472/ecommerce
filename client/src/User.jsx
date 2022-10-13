import React from "react";
import Navbar from "./components/Navbar";
import FooterTwo from "./components/FooterTwo";
import FooterOne from "./components/FooterOne";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import ProductCategory from "./components/ProductCategory";
import Checkout from "./components/Checkout";

const User = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductCategory />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      <FooterOne />
      <FooterTwo />
    </div>
  );
};

export default User;

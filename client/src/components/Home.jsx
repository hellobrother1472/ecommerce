import React from "react";
import Carousel from "./Carousel";
import ShopUs from "./ShopUs";
import Arrivals from "./Arrivals";
import Testimonials from "./Testimonials";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <Carousel />
      <ShopUs />
      <Arrivals />
      <Product />
      <Testimonials />
    </div>
  );
};

export default Home;

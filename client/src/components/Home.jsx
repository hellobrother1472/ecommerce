import React from "react";
import Carousel from "./Carousel";
import ShopUs from "./ShopUs";
import Arrivals from "./Arrivals";
import Offer from "./Offer";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <Carousel />
      <ShopUs />
      <Arrivals />
      <Product />
      <Offer />
    </div>
  );
};

export default Home;

import React from "react";
import Carousel from "./Carousel";
import ShopUs from "./ShopUs";
import Arrivals from "./Arrivals";
import Testimonials from "./Testimonials";
import Product from "./Product";

const Home = ({setProgress}) => {
  return (
    <>
      <Carousel />
      <ShopUs />
      <Arrivals />
      <Product setProgress = {setProgress}/>
      <Testimonials />
    </>
  );
};

export default Home;

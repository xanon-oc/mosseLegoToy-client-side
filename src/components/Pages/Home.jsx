import React from "react";
import Banner from "../Home/Banner";
import GallerySection from "../Home/GallerySection";
import TabSys from "../Home/TabSys";
import useTitle from "../../Hooks/useTitle";
import Reviews from "../Home/Reviews";
import Subscribe from "../Home/Subscribe";

const Home = () => {
  useTitle(" Home");
  return (
    <div className="">
      <Banner />
      <TabSys />
      <GallerySection />
      <Reviews />
      <Subscribe />
    </div>
  );
};

export default Home;

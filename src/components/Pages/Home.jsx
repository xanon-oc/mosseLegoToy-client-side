import React from "react";
import Banner from "../Home/Banner";
import GallerySection from "../Home/GallerySection";
import TabSys from "../Home/TabSys";
import useTitle from "../../Hooks/useTitle";

const Home = () => {
  useTitle(" Home");
  return (
    <div className="">
      <Banner />
      <TabSys />
      <GallerySection />
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import Banner from "../Home/Banner";
import GallerySection from "../Home/GallerySection";
import TabSys from "../Home/TabSys";
import useTitle from "../../Hooks/useTitle";
import Reviews from "../Home/Reviews";
import Subscribe from "../Home/Subscribe";
import AOS from "aos";
import "aos/dist/aos.css";
import Offer from "../Home/Offer";
import AppStore from "../Home/AppStore";
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  useTitle(" Home");
  return (
    <div className="">
      <div className="" data-aos="zoom-in-down">
        <Banner />
      </div>
      <div data-aos="fade-up" className="mt-6">
        <Offer />
      </div>
      <div data-aos="fade-up">
        <TabSys />
      </div>
      <GallerySection />
      <div data-aos="fade-up">
        <Reviews />
      </div>
      <div data-aos="fade-up">
        <Subscribe />
      </div>
      <div data-aos="fade-up">
        <AppStore />
      </div>
    </div>
  );
};

export default Home;

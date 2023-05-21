import React, { useEffect } from "react";
import Navbar from "../Shared/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Shared/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const navigation = useNavigation();
  return (
    <div className="">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="top-0">
        {navigation.state === "loading" ? (
          <div className="flex justify-center items-center h-screen">
            <div className="loader">
              <span className="loader-text">loading</span>
              <span className="load"></span>
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
      <div className="divider w-[90%] mt-8 mb-8 mx-auto"></div>
      <div data-aos="zoom-in-down">
        <Footer />
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div className="">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Outlet />

      <div className="divider w-[90%] mt-8 mb-8 mx-auto"></div>
      <Footer />
    </div>
  );
};

export default Main;

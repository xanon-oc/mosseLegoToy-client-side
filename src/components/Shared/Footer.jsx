import React from "react";
import logo from "/moose.png";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-[aliceblue] text-black mt-8">
      <div>
        <img className="w-28" src={logo} alt="" />
        <p className="font-bold">
          ACME Industries Ltd. <br />
          Providing reliable tech since 1992
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

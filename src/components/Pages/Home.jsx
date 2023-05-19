import React from "react";
import Banner from "../Home/Banner";
import GallerySection from "../Home/GallerySection";
import TabSys from "../Home/TabSys";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <div className="flex justify-center mb-8">
        <div className="form-control mt-8">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-64"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-square">
              <svg viewBox="0 0 384 512" className="micIcon">
                <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <TabSys />
      <GallerySection />
    </div>
  );
};

export default Home;

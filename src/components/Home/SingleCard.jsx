import React, { useContext, useState } from "react";
import icon from "/category.png";
import icon2 from "/boxes.png";
import icon3 from "/star.png";
import SingleModal from "./SingleModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { Link } from "react-router-dom";
const SingleCard = ({ data, handleSingleItem, singleData }) => {
  const { user } = useContext(AuthContext);
  const { _id, pictureURL, name, subCategory, price, rating, quantity } = data;
  const notify = () =>
    toast.warn("To view details you need to login !  Click me to Login 👈", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div className="block border-[1px] rounded-lg p-4 shadow-sm shadow-indigo-100">
      <Link to="/login">
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Link>
      <img
        alt="Home"
        src={pictureURL}
        className="h-56 w-full rounded-md object-contain"
      />
      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">${price}</dd>
          </div>

          <div>
            <dt className="sr-only">Name</dt>

            <dd className="font-medium">{name}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <img className="w-6" src={icon} alt="" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Category</p>

              <p className="font-medium">{subCategory}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <img className="w-7" src={icon2} alt="" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Quantity</p>

              <p className="font-medium">{quantity}</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <img className="w-6" src={icon3} alt="" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Ratings</p>

              <p className="font-medium">{rating}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 mb-6">
        {/* The button to open modal */}
        {user ? (
          <label
            onClick={() => handleSingleItem(_id)}
            htmlFor="my-modal-3"
            className="btn button-view"
          >
            View details
          </label>
        ) : (
          <label onClick={() => notify()} className="btn button-view disabled">
            View details
          </label>
        )}
      </div>
      <SingleModal singleData={singleData} />
    </div>
  );
};

export default SingleCard;

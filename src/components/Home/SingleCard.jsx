import React from "react";
import icon from "/category.png";
import icon2 from "/boxes.png";
import icon3 from "/star.png";
const SingleCard = ({ data }) => {
  const {
    _id,
    pictureURL,
    name,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    quantity,
    description,
  } = data;
  console.log(_id);
  return (
    <div className="block border-[1px] rounded-lg p-4 shadow-sm shadow-indigo-100">
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
        <button className="button-view">View details</button>
      </div>
    </div>
  );
};

export default SingleCard;

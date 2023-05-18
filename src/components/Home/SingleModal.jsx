import React from "react";
import { useParams } from "react-router-dom";
import icon from "/category.png";
import icon2 from "/boxes.png";
import icon3 from "/star.png";
import icon4 from "/seller.png";
import icon5 from "/gmail.png";
const SingleModal = ({ singleData }) => {
  console.log(singleData.name);
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl  relative ">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle  hover:bg-red-600 border-none absolute right-2 top-2"
          >
            ✕
          </label>

          <div className="grid md:grid-cols-2 lg:grid-cols-2">
            <div>
              <img
                className="object-contain border-[1px] p-8 rounded-lg"
                src={singleData.pictureURL}
                alt="Album"
              />
              <div className="flex justify-center mt-4">
                <button className="Btn">
                  Buy Now
                  <svg className="svgIcon" viewBox="0 0 576 512">
                    <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="card-body">
              <div>
                <h2 className="card-title">{singleData.name}</h2>
                <p>$ {singleData.price}</p>
                <p>
                  <small>{singleData.description}</small>
                </p>
              </div>
              <div className="mt-6 grid md:grid-cols-3 items-center gap-8 text-xs">
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <img className="w-6" src={icon} alt="" />

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Category</p>

                    <p className="font-medium">{singleData.subCategory}</p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <img className="w-7" src={icon2} alt="" />

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Quantity</p>

                    <p className="font-medium">{singleData.quantity}</p>
                  </div>
                </div>

                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <img className="w-6" src={icon3} alt="" />

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Ratings</p>

                    <p className="font-medium">{singleData.rating}</p>
                  </div>
                </div>
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <img className="w-6" src={icon4} alt="" />

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Seller</p>

                    <p className="font-medium">{singleData.sellerName}</p>
                  </div>
                </div>
                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                  <img className="w-6" src={icon5} alt="" />

                  <div className="mt-1.5 sm:mt-0">
                    <p className="text-gray-500">Seller Email</p>

                    <p className="font-medium">{singleData.sellerEmail}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleModal;

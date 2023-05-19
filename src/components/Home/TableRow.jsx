import React, { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const TableRow = ({ data, index, handleSingleItem }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    pictureURL,
    name,
    subCategory,
    price,
    quantity,
    sellerName,
    sellerEmail,
  } = data;
  const notify = () =>
    toast.warn("Login Required ! Tap Login 👈", {
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
    <tr>
      <td>
        <span className="badge badge-outline">{index + 1}</span>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={pictureURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{subCategory}</div>
          </div>
        </div>
      </td>
      <td>
        {sellerName}
        <br />
        <span className="badge badge-ghost badge-sm">{sellerEmail}</span>
      </td>
      <td>
        $ {price}
        <br />
        <span className="badge badge-ghost badge-sm">Stock - {quantity}</span>
      </td>

      <th className="">
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
      </th>
    </tr>
  );
};

export default TableRow;

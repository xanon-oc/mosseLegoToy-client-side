import React, { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
const TableRow = ({ data, index, handleSingleItem, handleNavigate }) => {
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
        {user ? (
          <label
            onClick={() => handleSingleItem(_id)}
            htmlFor="my-modal-3"
            className="btn button-view"
          >
            View details
          </label>
        ) : (
          <label
            onClick={() => handleNavigate()}
            className="btn button-view disabled"
          >
            Login to View details
          </label>
        )}
      </th>
    </tr>
  );
};

export default TableRow;

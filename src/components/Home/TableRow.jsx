import React from "react";

const TableRow = ({ data, handleSingleItem }) => {
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

      <th className="w-10">
        <label
          onClick={() => handleSingleItem(_id)}
          htmlFor="my-modal-3"
          className="btn button-view"
        >
          details
        </label>
      </th>
    </tr>
  );
};

export default TableRow;

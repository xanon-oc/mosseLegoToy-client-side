import { Link } from "react-router-dom";

const MyToysTableRow = ({ data, index, handleDelete }) => {
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

      <th>
        <button
          onClick={() => handleDelete(data._id)}
          className="btn button-view hover:bg-red-500 w-7"
        >
          Delete
        </button>
      </th>
      <th className="w-10">
        <Link to={`/UpdateProduct/${_id}`}>
          <button className="btn button-view w-7">Update</button>
        </Link>
      </th>
    </tr>
  );
};

export default MyToysTableRow;

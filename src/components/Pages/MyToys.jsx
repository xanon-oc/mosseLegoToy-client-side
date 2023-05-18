import React from "react";
import { Link } from "react-router-dom";

const MyToys = () => {
  return (
    <div className="overflow-x-auto w-10/12 mx-auto mt-10">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Name-Category-Pic</th>
            <th>Seller Details</th>
            <th>Price & Stock</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?w=996&t=st=1684436222~exp=1684436822~hmac=b315bdb074a955ab57e4378daaa643f65b957fca52a1b732aca92c92a91d7fd6"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn button-view hover:bg-red-500 w-7">
                Delete
              </button>
            </th>
            <th className="w-10">
              <Link to="/UpdateProduct">
                <button className="btn button-view w-7">Update</button>
              </Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;

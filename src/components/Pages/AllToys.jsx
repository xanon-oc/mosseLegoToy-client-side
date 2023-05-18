import React, { useEffect, useState } from "react";
import Banner from "../Home/Banner";
import SingleCard from "../Home/SingleCard";
import SingleModal from "../Home/SingleModal";
import TableRow from "../Home/TableRow";

const AllToys = () => {
  const [allData, setAllData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-products")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);
  const handleSingleItem = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/single-product/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setSingleData(data));
  };
  return (
    <div>
      <Banner />
      <div className="overflow-x-auto w-10/12 mx-auto mt-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name-Category-Pic</th>
              <th>Seller Details</th>
              <th>Price & Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allData.map((data) => (
              <TableRow
                key={data._id}
                data={data}
                handleSingleItem={handleSingleItem}
              />
            ))}
          </tbody>
        </table>
      </div>
      <SingleModal singleData={singleData} />
    </div>
  );
};

export default AllToys;

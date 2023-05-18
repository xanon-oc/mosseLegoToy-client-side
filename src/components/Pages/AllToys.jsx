import { useEffect, useState } from "react";
import SingleModal from "../Home/SingleModal";
import TableRow from "../Home/TableRow";
import logo from "/moose.png";
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
      <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
        <img
          alt="Night"
          src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />

        <div className="hidden lg:relative lg:block lg:p-12">
          <a className="block text-white" href="/">
            <span className="sr-only">Home</span>
          </a>

          <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Review all the products on Moose 🦑
          </h2>

          <p className="mt-4 leading-relaxed text-white/90">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nam dolorum aliquam, quibusdam aperiam voluptatum.
          </p>
        </div>
      </section>
      <div className="relative -mt-16 block lg:hidden w-[90%] mx-auto">
        <a
          className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
          href="/"
        >
          <span className="sr-only">Home</span>
          <img src={logo} alt="" />
        </a>

        <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Review all the products on Moose 🦑
        </h1>

        <p className="mt-4 leading-relaxed text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
          dolorum aliquam, quibusdam aperiam voluptatum.
        </p>
      </div>
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

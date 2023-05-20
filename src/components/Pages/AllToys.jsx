import { useEffect, useState } from "react";
import SingleModal from "../Home/SingleModal";
import TableRow from "../Home/TableRow";
import logo from "/moose.png";
const AllToys = () => {
  const [allData, setAllData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/all-products/""`)
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
  const handleSearch = (e) => {
    fetch(`http://localhost:5000/search/${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        console.log(data);
      });
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

      {/* Search */}
      <div className="flex justify-center">
        <div className="form-control mt-8">
          <div className="input-group">
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Search…"
              className="input input-bordered w-96"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-square">
              <svg viewBox="0 0 384 512" className="micIcon">
                <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto shadow-xl w-10/12 mx-auto mt-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name-Category-Pic</th>
              <th>Seller Details</th>
              <th>Price & Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allData.map((data, index) => (
              <TableRow
                key={data._id}
                data={data}
                handleSingleItem={handleSingleItem}
                index={index}
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

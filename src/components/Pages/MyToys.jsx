import React, { useContext, useEffect, useState } from "react";
import logo from "/moose.png";
import MyToysTableRow from "./MyToysTableRow";
import { AuthContext } from "../AuthProviders/AuthProvider";
import Lottie from "lottie-react";
import NoData from "../../assets/NoData.json";
import { useNavigation } from "react-router-dom";
import Swal from "sweetalert2";
const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [specificData, setSpecificData] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    fetch(`http://localhost:5000/user-products?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSpecificData(data);
        console.log(data);
      });
  }, [user]);
  console.log(user);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteProduct/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const updatedProducts = specificData.filter(
              (product) => product._id !== id
            );
            setSpecificData(updatedProducts);
            console.log(data);
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      <div>
        {!specificData.length == 0 ? (
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
                  Your posted products on Moose 🦑
                </h2>

                <p className="mt-4 leading-relaxed text-white/90">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
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
                Your posted products on Moose 🦑
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
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
                    <th>Delete</th>
                    <th>Update</th>
                  </tr>
                </thead>
                {/* row 1 */}
                <tbody>
                  {specificData.map((data, index) => (
                    <MyToysTableRow
                      key={data._id}
                      index={index}
                      data={data}
                      handleDelete={handleDelete}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="flex justify-center w-96 mx-auto h-[calc(100vh-390px)]">
            <Lottie animationData={NoData} loop={true} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyToys;

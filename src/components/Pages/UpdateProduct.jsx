import { useLoaderData } from "react-router-dom";
import logo from "/moose.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import toast, { Toaster } from "react-hot-toast";
const UpdateProduct = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  useTitle(" update product");
  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const subCategory = form.category.value;
    const price = form.price.value;
    const rating = form.ratings.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const pictureURL = form.photoURL.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedData = {
      name,
      price,
      quantity,
      rating,
      sellerName,
      subCategory,
      description,
      sellerEmail,
      pictureURL,
    };
    console.log(updatedData);
    const notify = () => toast.success("Product update successful!");
    fetch(`http://localhost:5000/update-product/${data._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        notify();
        console.log(data);
      });
  };
  return (
    <section className="bg-white">
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="">
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
              Update your product to Moose 🦑
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-1 p-26 block lg:hidden">
              <a
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/"
              >
                <span className="sr-only">Home</span>
                <img src={logo} alt="" />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Update your product to Moose 🦑
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>

            <form
              onSubmit={handleFormData}
              className="mt-8 grid grid-cols-4 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  Product Name
                </label>

                <input
                  type="text"
                  name="name"
                  defaultValue={data.name}
                  className="mt-1 w-full h-11 p-2  rounded-md   border-[1px] border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Category
                </label>

                <select
                  name="category"
                  defaultValue={data.subCategory}
                  className="select select-bordered"
                >
                  <option disabled selected>
                    Pick one
                  </option>
                  <option>Lego City</option>
                  <option>Lego Cars</option>
                  <option>star wars</option>
                  <option>Lego Architecture</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  price
                </label>

                <input
                  type="text"
                  name="price"
                  defaultValue={data.price}
                  className="mt-1 h-11 p-2  w-full rounded-md border-[1px] border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  Ratings
                </label>

                <input
                  type="text"
                  name="ratings"
                  defaultValue={data.rating}
                  className="mt-1 h-11 p-2  w-full rounded-md border-[1px] border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Seller Name
                </label>

                <input
                  type="text"
                  name="sellerName"
                  defaultValue={data.sellerName}
                  className="mt-1 h-11 p-2  w-full rounded-md border-[1px] border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Seller Email
                </label>

                <input
                  type="email"
                  name="sellerEmail"
                  readOnly
                  defaultValue={user?.email}
                  className="mt-1 h-11 p-2  w-full rounded-md border-[1px] border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Quantity
                </label>

                <input
                  type="text"
                  name="quantity"
                  defaultValue={data.quantity}
                  className="mt-1 h-11 p-2  w-full rounded-md border-[1px] border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Photo URL
                </label>

                <input
                  type="url"
                  name="photoURL"
                  defaultValue={data.pictureURL}
                  className="mt-1 h-11 p-2  w-full rounded-md border-[1px] border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              <div className="col-span-6">
                <textarea
                  name="description"
                  defaultValue={data.description}
                  placeholder="Description"
                  className="textarea textarea-bordered textarea-lg w-full max-w-5xl"
                ></textarea>
              </div>
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="sign-in_btn">Update Product</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default UpdateProduct;

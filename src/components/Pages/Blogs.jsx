import React from "react";
import Lottie from "lottie-react";
import BlogsAnimation from "../../assets/Blogs.json";
const Blogs = () => {
  return (
    <div className="mt-8">
      <div className="mx-auto w-96">
        <Lottie animationData={BlogsAnimation} loop={true} />
      </div>
      <h2 className="text-center text-2xl font-bold mb-8 mt-8">Blogs</h2>
    </div>
  );
};

export default Blogs;
// h-[calc(100vh-390px)]

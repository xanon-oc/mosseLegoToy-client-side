import Lottie from "lottie-react";
import Error from "../../assets/404-error.json";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    return navigate("/");
  };
  return (
    <div className="relative">
      <div className="">
        <Lottie animationData={Error} loop={true} />
      </div>
      <div className="absolute inset-x-[30%] md:inset-x-[20%] lg:inset-x-[20%] top-[75%] md:top-[45%] lg:top-[45%]">
        <button onClick={() => handleNavigate()} className="button-view">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;

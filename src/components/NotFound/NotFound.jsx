import Lottie from "lottie-react";
import Error from "../../assets/404-error.json";
const NotFound = () => {
  return (
    <div>
      <Lottie animationData={Error} loop={true} />
    </div>
  );
};

export default NotFound;

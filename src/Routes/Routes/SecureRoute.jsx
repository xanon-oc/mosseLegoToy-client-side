import React, { useContext } from "react";
import { AuthContext } from "../../components/AuthProviders/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Loader from "../../assets/Loader.json";
const SecureRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div>
        <div className="flex justify-center items-center w-96 mx-auto h-[calc(100vh-100px)]">
          <Lottie animationData={Loader} loop={true} />
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default SecureRoute;

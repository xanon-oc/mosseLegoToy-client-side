import React, { useContext } from "react";
import { AuthContext } from "../../components/AuthProviders/AuthProvider";
import { useNavigate } from "react-router-dom";

const SecureRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  if (user) {
    return children;
  }
  return navigate("/login");
};

export default SecureRoute;

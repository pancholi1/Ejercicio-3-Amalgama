import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

interface PrivateRouteProps {
  component: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component }) => {
  const { loginState } = useContext(AuthContext)!;
  return loginState.isAuthenticated ? component : <Navigate to="/login" />;
};

export default PrivateRoute;

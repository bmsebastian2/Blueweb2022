import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";

const LayaoutAuthentics = () => {
  const { user } = useContext(UserContext);
  if (user) {
    return <Outlet />;
  }
    return <Navigate to="/loging" />;
};

export default LayaoutAuthentics;

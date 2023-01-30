import React, { useHistory } from "react";
import { Route, Navigate } from "react-router-dom";

function ProtectedRoutes({ isAuth, Child }) {
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }
  return Child;
}

export default ProtectedRoutes;

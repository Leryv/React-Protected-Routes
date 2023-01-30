import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="d-flex justify-content-center">
        <div className="p-2">
          <Link to="/">Home</Link>
        </div>
        <div className="p-2">
          <Link to="/profile">profile</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;

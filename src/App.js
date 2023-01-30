import React, { useState } from "react";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./ProtectedRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

function App() {
  const [isAuth, setIsAuth] = useState(null);

  const signInButton = () => {
    setIsAuth(true);
  };

  const signOutButton = () => {
    setIsAuth(false);
  };

  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/*" element={<Home />}>
          <Route
            path="*"
            element={
              <ProtectedRoutes isAuth={isAuth}>
                <ErrorPage />
              </ProtectedRoutes>
            }
          />
        </Route>
        <Route
          path="profile"
          element={
            <ProtectedRoutes isAuth={isAuth}>
              <Profile />
            </ProtectedRoutes>
          }
        />
      </Routes>
      {isAuth ? (
        <div className="d-grid mt-5">
          <button className="btn-danger" onClick={signOutButton}>
            Sign Out
          </button>
        </div>
      ) : (
        <div className="d-grid mt-5">
          <button className="btn-dark" onClick={signInButton}>
            Sign In
          </button>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;

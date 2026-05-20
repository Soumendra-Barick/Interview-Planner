import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import "../auth.form.scss";

const Protected = ({ children }) => {
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <main className="loader-container">
        <div className="dot-loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </main>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default Protected;

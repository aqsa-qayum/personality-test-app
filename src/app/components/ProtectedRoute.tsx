// src/app/components/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { username } = useUser();

  if (!username) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;

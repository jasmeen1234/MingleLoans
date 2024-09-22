import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
  if (!user.token) {
    // If the user is not logged in, redirect to the login page
    return <Navigate to="/" />;
  }
  return children; // Render the children if the user is authenticated
};

export default ProtectedRoute;
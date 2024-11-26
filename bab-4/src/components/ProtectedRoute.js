// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
    const isAuthenticated = false; // Change this to true to simulate authentication

    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
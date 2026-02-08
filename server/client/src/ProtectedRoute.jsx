import {  } from "react";
import { Navigate, Outlet } from "react-router";
import {  useAuth } from "./AuthContext";

const ProtectedRoute = () => {
    const { user, loading } =  useAuth()

    if (loading) {
        return <div>Loading validasi sesi...</div>;
    }

    if (!user) {
        return <Navigate to="/auth/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
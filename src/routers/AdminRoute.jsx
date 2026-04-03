import React, { Children } from 'react';
import { Navigate } from 'react-router';
import UseAuth from '../Hooks/UseAuth';
import UseUserRole from '../Hooks/UseUserRole';

const AdminRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const { role, roleLoading } = UseUserRole();

    if (loading || roleLoading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if (!user || role !== 'admin') {
        return <Navigate state={{ from: location.pathname }} to="/forbidden"></Navigate>
    }

    return children;
};

export default AdminRoute;
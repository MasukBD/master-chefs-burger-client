/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div style={{ height: '100vh' }} className='d-flex align-items-center justify-content-center'><Spinner animation="border" variant="warning" /></div>
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
};

export default PrivateRoute;
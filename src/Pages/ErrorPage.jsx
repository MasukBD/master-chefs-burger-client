/* eslint-disable no-unused-vars */
import React from 'react';
import { useRouteError } from 'react-router-dom';
import { FaRegFrown } from 'react-icons/fa';


const ErrorPage = () => {
    const errors = useRouteError();
    console.log(errors);

    return (
        <div style={{ height: '100vh' }} className='d-flex text-center justify-content-center align-items-center'>
            <div>
                <FaRegFrown style={{ fontSize: '60px' }}></FaRegFrown>
                <h1 style={{ fontSize: '80px' }} className='text-warning'>{errors.status}</h1>
                <p className='fw-medium'>{errors.statusText}!</p>
                <p className='fw-medium'>{errors.data}</p>
            </div>
        </div>
    );
};

export default ErrorPage;
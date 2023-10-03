/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Pages/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer';

const PrimaryPage = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default PrimaryPage;
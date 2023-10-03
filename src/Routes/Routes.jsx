/* eslint-disable no-unused-vars */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PrimaryPage from '../Layout/PrimaryPage';
import ErrorPage from '../Pages/ErrorPage';
import Blogs from '../Pages/Blogs';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import HomePage from '../Pages/HomePage';
import ViewRecipe from '../Pages/ViewRecipe';
import PrivateRoute from './PrivateRoute';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <PrimaryPage></PrimaryPage>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
                loader: () => fetch('https://master-chefs-burger-server.vercel.app/store')
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/chefs/:id",
                element: <PrivateRoute><ViewRecipe></ViewRecipe></PrivateRoute>,
                loader: ({ params }) => fetch(`https://master-chefs-burger-server.vercel.app/chefs/${params.id}`)
            }
        ]
    }


]);

export default Routes;
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Style/StoreMarqe.css';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const StoreMarqe = ({ store }) => {
    const { id, store_image, title, des } = store;
    return (
        <div className='ms-3 position-relative marque'>
            <img className='rounded' width={290} height={400} src={store_image} alt="" />
            <div className='position-absolute top-0 start-0 bottom-0 d-none ps-3 py-5 bg-dark rounded bg-opacity-50'>
                <h2>{title}</h2>
                <p>{des}</p>
                <Button className='mt-2' variant="warning">Explore More <FaArrowRight /></Button>
            </div>
        </div>
    );
};

export default StoreMarqe;
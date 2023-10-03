/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import ChefCard from './ChefCard';
import LazyLoad from 'react-lazy-load';

const Chefs = () => {
    const [chefList, setChefList] = useState([]);
    const [showAll, setShowAll] = useState(true);
    useEffect(() => {
        fetch('https://master-chefs-burger-server.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefList(data))
            .catch(error => console.log(error));
    }, [])
    return (
        <div className='my-5' id='chefs'>
            <h3 className='text-center mb-2 py-3 fs-2 fw-bold'>Our Chefs On Table</h3>
            <Container>
                <LazyLoad>
                    <Row className='g-4'>
                        {
                            showAll ? chefList.slice(0, 4).map(cf => <ChefCard key={cf.id} chef={cf}></ChefCard>) : chefList.map(cf => <ChefCard key={cf.id} chef={cf}></ChefCard>)
                        }
                    </Row>
                </LazyLoad>
                {
                    showAll ? <p className='text-center'><Button onClick={() => setShowAll(!showAll)} className='fw-semibold mt-5' variant="warning">Show All Chef</Button></p> : ' '
                }
            </Container>
        </div>
    );
};

export default Chefs;
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Style/CardStyle.css';
import { FaPlus, FaHamburger } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, chef_name, chef_picture, likes, number_of_recipes, year_of_experience } = chef;
    return (
        <Col sm={12} md={6} lg={3} >
            <Card className='chef-card'>
                <Card.Img className='card-img' variant="top" width={380} src={chef_picture} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <Card.Text>
                        {chef_name} is very good and passionate with burger making in different ways. Last few year&apos;s he was working for many international Brand and So On!
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className='fw-semibold'>Year Of Experience: {year_of_experience}</ListGroup.Item>
                        <ListGroup.Item className='fw-semibold'>Number Of Recipes: {number_of_recipes}</ListGroup.Item>
                        <ListGroup.Item className='fw-semibold d-flex align-items-center'>Total Review: {likes} <FaPlus /></ListGroup.Item>
                    </ListGroup>
                </Card.Body>
                <Link to={`/chefs/${id}`}><Button className='w-100 fw-semibold' variant="warning">View Recipes  <FaHamburger /></Button></Link>
            </Card>
        </Col>
    );
};

export default ChefCard;
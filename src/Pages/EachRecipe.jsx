/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, Card, Col, ListGroup } from 'react-bootstrap';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const EachRecipe = ({ recipe }) => {
    const [favorite, setFavourite] = useState(false);

    const { recipe_id, recipe_name, ingredients, photo, cooking_method, rating, recipe_likes } = recipe;

    const handleFavourite = () => {
        setFavourite(!favorite);
        toast.success('Added Successfully!');
    }
    return (

        <Col sm={12} md={6}>
            <Card>
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title className='fw-bold'>{recipe_name}</Card.Title>
                    <h6 className='mt-3'>Ingredients</h6>
                    <hr className='my-0' />
                    <ol className='fw-medium'>
                        <li>{ingredients[0] ? ingredients[0] : 'Fresh Burger Bun'}</li>
                        <li>{ingredients[1] ? ingredients[1] : 'Fresh Burger Bun'}</li>
                        <li>{ingredients[2] ? ingredients[2] : 'Fresh Burger Bun'}</li>
                        <li>{ingredients[3] ? ingredients[3] : 'Fresh Burger Bun'}</li>
                        <li>{ingredients[4] ? ingredients[4] : 'Fresh Burger Bun'}</li>
                    </ol>
                    <Card.Text className='fw-medium'>
                        Cooking Method: {cooking_method}
                    </Card.Text>
                    <div className='fw-medium d-flex align-items-center'>
                        <span>Ratings:</span>
                        <Rating
                            readonly
                            placeholderRating={rating}
                            emptySymbol={<FaStar></FaStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            className='mx-2'
                        >
                        </Rating>
                        <span>{rating}</span>
                    </div>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between align-items-center'>
                    <small className="text-muted fw-medium">Total Like&apos;s : {recipe_likes}</small>
                    <Button onClick={handleFavourite} disabled={favorite} variant="warning">Add Favourite</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default EachRecipe;
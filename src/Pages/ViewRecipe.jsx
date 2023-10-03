/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import './styles/ViewRecipe.css';
import { FaPlus } from 'react-icons/fa';
import EachRecipe from './EachRecipe';

const ViewRecipe = () => {
    const chefsData = useLoaderData();
    const { id, chef_picture, description, chef_name, year_of_experience, number_of_recipes, likes, popular_recipes } = chefsData;

    return (
        <>
            {/* banner section  */}
            <section className='recipie-banner'>
                <Container className='py-5 d-flex flex-column gap-3 flex-lg-row align-items-center'>
                    <div className='order-2 order-lg-1'>
                        <div>
                            <h2 className='fw-bold'>Chef {chef_name}</h2>
                            <p className='fw-medium'>{description}</p>
                            <h5>Year of Experience : {year_of_experience} year&apos;s</h5>
                            <h5>Number of Recipe : {number_of_recipes}</h5>
                            <h5 className='d-flex align-items-center'>Number of People Likes : {likes} <FaPlus /></h5>
                        </div>
                    </div>
                    <div className='order-1 order-lg-2'>
                        <Image src={chef_picture} rounded />
                    </div>
                </Container>
            </section>
            {/* popular recipe section  */}
            <Container className='my-5'>
                <h2 className='text-center fw-bold mb-5'>Most Popular Recipe</h2>
                <Row className='row-gap-3'>
                    {
                        popular_recipes.map(recipe => <EachRecipe recipe={recipe} key={recipe.recipe_id}></EachRecipe>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default ViewRecipe;
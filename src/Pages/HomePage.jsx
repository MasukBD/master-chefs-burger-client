/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import banner1 from '../assets/banner-image/burger-banner-1.png';
import banner2 from '../assets/banner-image/burger-banner-2.png';
import banner3 from '../assets/banner-image/burger-banner-3.png';
import { HashLink as Link } from 'react-router-hash-link';
import './styles/HomePage.css';
import Chefs from '../Component/Chefs';
import StoreMarqe from '../Component/StoreMarqe';
import Marquee from "react-fast-marquee";
import play from '../assets/company-icon/get-in-on-google-play.png';
import appStore from '../assets/company-icon/get-it-on-app-store.jpg';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../CustomHook/UseTitle';

const HomePage = () => {
    const storeData = useLoaderData();

    useTitle('Home');
    return (
        <>
            {/* banner section  */}
            <Carousel data-bs-theme="white">
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Creamy Double Cheese Burger</h5>
                        <p className='fw-medium'>Make room for our Double Cheese burger, two signature flamed-grilled beef patties with extra Cheese!</p>
                        <Link to="#chefs" smooth><Button className='fw-bold text-dark' variant="warning">Check Now!</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>King&apos;s Special Whoper Cheese Burger</h5>
                        <p className='fw-medium'>Make room for our Double Cheese burger, two signature flamed-grilled beef patties with extra Cheese!</p>
                        <Link to="#chefs" smooth><Button className='fw-bold text-dark' variant="warning">Check Now!</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Big Mac Extra Cheese Burger</h5>
                        <p className='fw-medium'>Make room for our Double Cheese burger, two signature flamed-grilled beef patties with extra Cheese!</p>
                        <Link to="#chefs" smooth><Button className='fw-bold text-dark' variant="warning">Check Now!</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container className='my-5'>
                <Row className='row-gap-3 d-flex align-items-center'>
                    <Col sm={12} md={6}>
                        <img className='img-fluid rounded' src='https://images.unsplash.com/photo-1541557435984-1c79685a082b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt="" />
                    </Col>
                    <Col sm={12} md={6}>
                        <h2 className='fw-bold'>Meet the next generation of Savory With world Best Pattie Cooker!</h2>
                        <p className='fs-5'>What makes quick commerce quick? We stand for swift personalised delivery solutions for our customers, partners and employees. Learn how we empower authentic lifestyles and drive innovation across the globe.</p>
                        <Link to='/blog'><Button className='fw-semibold px-3' variant="dark">Read More</Button></Link>
                    </Col>
                </Row>
            </Container>
            {/* chefs section  */}
            <Chefs></Chefs>
            {/* Food Zone section  */}
            <section className='my-5'>
                <h2 className='text-center fw-bold mt-4 mb-2'>Explore Our Mega Food Zone</h2>
                <p className='text-center mb-3 fw-medium'>Taste Italian Pizza or Turkish Bread? All of your favourite dishes from different part&apos;s world in one roof!</p>
                <Marquee>
                    {
                        storeData.map(store => <StoreMarqe key={store.id} store={store}></StoreMarqe>)
                    }
                </Marquee>
            </section>
            {/* Get the App section  */}
            <Container>
                <div className='get-app my-5 d-flex flex-column flex-lg-row gap-3 align-items-center'>
                    <img className='w-50' src="https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303524.jpg?w=740&t=st=1690045651~exp=1690046251~hmac=87f7924a63833e91da7d32cf19fc72a8c34c1a187f187b814aa007dfb2f63d62" alt="" />
                    <div>
                        <h2 className='fw-bold'>New: Faster Faves, Only in the App</h2>
                        <p>We now prep when you’re on the way if you choose Curbside, Front Counter—or dine in for Table Service. Just order ahead in the app to save time. Because waiting in line for faves? Not our thing either.</p>
                        <div className='d-flex gap-3'>
                            <a href=""><img width={180} height={60} src={play} alt="" /></a>
                            <a href=""><img width={180} height={60} src={appStore} alt="" /></a>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default HomePage;
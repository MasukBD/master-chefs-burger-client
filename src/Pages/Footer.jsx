/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import './styles/Footer.css';
import icon1 from '../assets/social-icon/facebook.png';
import icon2 from '../assets/social-icon/instagram.png';
import icon3 from '../assets/social-icon/twitter.png';

const Footer = () => {
    return (
        <div className='text-white bg-black py-5 foter'>
            <Container className='foter'>
                <div className='d-flex justify-content-between flex-column gap-4 flex-lg-row'>
                    <div>
                        <h4>About Us</h4>
                        <a className='text-decoration-none text-white d-block' href="">About Us Overview</a>
                        <a className='text-decoration-none text-white d-block' href="">Our History</a>
                        <a className='text-decoration-none text-white d-block' href="">value in Action</a>
                        <a className='text-decoration-none text-white d-block' href="">Real Estate</a>
                        <a className='text-decoration-none text-white d-block' href="">Leadership</a>
                    </div>
                    <div>
                        <h4>Community</h4>
                        <a className='text-decoration-none text-white d-block' href="">Comunity Overview</a>
                        <a className='text-decoration-none text-white d-block' href="">Commercial Agency</a>
                        <a className='text-decoration-none text-white d-block' href="">Charity</a>
                        <a className='text-decoration-none text-white d-block' href="">International Service</a>
                        <a className='text-decoration-none text-white d-block' href="">Bangladesh</a>
                    </div>
                    <div>
                        <h4>Services</h4>
                        <a className='text-decoration-none text-white d-block' href="">Trending Now</a>
                        <a className='text-decoration-none text-white d-block' href="">Family Fun Hub</a>
                        <a className='text-decoration-none text-white d-block' href="">GitHub Priorities</a>
                        <a className='text-decoration-none text-white d-block' href="">Delivary Now</a>
                        <a className='text-decoration-none text-white d-block' href="">Mobile Order & Pay</a>
                    </div>
                    <div>
                        <h4>Contact Us</h4>
                        <a className='text-decoration-none text-white d-block' href="">Gift Card</a>
                        <a className='text-decoration-none text-white d-block' href="">Donation</a>
                        <a className='text-decoration-none text-white d-block' href="">Share Bussiness</a>
                        <a className='text-decoration-none text-white d-block' href="">Employment</a>
                        <a className='text-decoration-none text-white d-block' href="">FAQ</a>
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-between flex-column flex-lg-row gap-3'>
                    <p className='order-md-1 order-2'>©All Right Reserved. IlIus MahfuZ 2023</p>
                    <div className='order-md-2 order-1'>
                        <a href=""><img className='ms-4' width={35} src={icon1} alt="" /></a>
                        <a href=""><img className='ms-4' width={35} src={icon2} alt="" /></a>
                        <a href=""><img className='ms-4' width={35} src={icon3} alt="" /></a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
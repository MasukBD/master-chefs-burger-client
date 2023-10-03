/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Image, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './styles/Header.css';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-hot-toast';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const hanldeLogOut = () => {
        logOut()
            .then(() => {
                toast.success("LogOut Successfull")
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" className="navigation-bar" bg="dark" data-bs-theme="dark">
            <Container>
                <Link className='text-warning fw-semibold fs-4 '>Master Chef&apos;s Burger</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav-bar d-flex align-items-center gap-2">
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-warning fw-bold' : 'text-white')}>Home</NavLink>
                        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-warning fw-bold' : 'text-white')}>Blogs</NavLink>
                        {
                            user &&
                            <Image className='ms-2' width={32} title={user.displayName} src={user.photoURL} roundedCircle />
                        }
                        {
                            user ? <Button onClick={hanldeLogOut} className='fw-medium ms-3' variant="warning">LogOut</Button> : <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-warning fw-bold' : 'text-white')}>LogIn</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
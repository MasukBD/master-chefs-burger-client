/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import './styles/Login.css';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [showError, setShowError] = useState(null);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const { createUserByEmail } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const formData = event.target;
        const name = formData.name.value;
        const email = formData.email.value;
        const password = formData.password.value;
        const photo = formData.photo.value;


        if (password.length < 6) {
            setShowError('Password should be 6 charecter');
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setShowError("Password should include atlest one UpperCase!")
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setShowError("password should include at one Number!")
            return;
        }
        else {
            createUserByEmail(email, password)
                .then(result => {
                    const newUser = result.user;
                    console.log(newUser);
                    updateProfile(newUser, {
                        displayName: name, photoURL: photo
                    })
                    formData.reset();
                    setShowError("");
                    navigate(from, { replace: true });
                    toast.success("User Sign Up Successfully");
                })
                .catch(error => {
                    setShowError(error.message)
                })
        }


    }

    return (
        <Container className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh' }}>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister} className='form'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Label>Put Your Photo URL Here</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className='' type="checkbox" label="I accept term & condition" />
                    <Link to=''>Learn More</Link>
                </Form.Group>

                <Button className='w-100 fw-medium' variant="warning" type="submit">Register</Button>
            </Form>
            {
                showError ? <p className='text-danger fw-medium my-3'>Error: {showError}</p> : ''
            }
            <p className={showError ? 'my-0 ' : 'my-3'}>Already have an Account? <Link to="/login">Login</Link></p>
        </Container>
    );
};

export default Register;
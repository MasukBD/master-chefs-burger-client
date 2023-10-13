/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './styles/Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import icon1 from '../assets/company-icon/google.png';
import icon2 from '../assets/company-icon/github.png';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import useTitle from '../CustomHook/UseTitle';

const Login = () => {

    const [showError, setShowError] = useState(null);
    const { loginByEmailPassword, googleLogin, githubLogin } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const formData = e.target;
        const email = formData.email.value;
        const password = formData.password.value;
        loginByEmailPassword(email, password)
            .then(result => {
                const loggedUser = result.user;
                formData.reset();
                setShowError(null);
                toast.success('Login Successfully');
                navigate(from, { replace: true })
            })
            .catch(error => {
                setShowError(error.message);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const googleUser = result.user;
                setShowError(null)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setShowError(error.message);
            })
    }

    const handleGitHubLogin = () => {
        githubLogin()
            .then(result => {
                const gitHubUser = result.user;
                console.log(gitHubUser);
                setShowError(null);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setShowError(error.meassage);
            })
    }
    useTitle('Login');
    return (
        <Container className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh' }}>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin} className='form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>

                <Button className='w-100 fw-medium' variant="warning" type="submit">Login</Button>
            </Form>
            {
                showError ? <p className='fw-medium text-danger mt-3'>Error: {showError}</p> : ''
            }
            <p className={showError ? 'my-0' : 'my-3'}>Don&apos;t have an Account? <Link to="/register">Register</Link></p>
            <p>Or</p>
            <Button onClick={handleGoogleLogin} variant="warning"><img className='me-2' width={30} src={icon1} alt="" /><span className='fw-medium'>Continune With Google</span></Button>
            <Button onClick={handleGitHubLogin} className='mt-2' variant="dark"><img className='me-2' width={30} src={icon2} alt="" /><span className='fw-medium'>Continune With GitHub</span></Button>
        </Container>
    );
};

export default Login;
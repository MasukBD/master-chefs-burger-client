/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Blogs = () => {
    const [loader, setLoader] = useState(false);
    const downloadPDF = () => {
        const capture = document.querySelector('.blog');
        setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoader(false);
            doc.save('Q&A_React.pdf');
        })
    }
    return (
        <div>
            <h2 className='text-center fw-bold bg-warning py-5'>Frequently Asked Question and Answer</h2>
            <Container className='blog'>
                <div className='my-3'>
                    <h5>Question 1: Tell us the differences between uncontrolled and controlled components?</h5>
                    <span className='fw-bold'>Answer: </span>
                    <span>In React, the terms &quot;uncontrolled components&quot; and &quot;controlled components&quot; refer to two different approaches for managing form elements and their state. Understanding the differences between these two approaches is essential for building effective and maintainable React applications: </span>
                    <p className='fw-medium mt-3'>Uncontrolled Components:</p>
                    <ul>
                        <li>In uncontrolled components, the form data is managed by the DOM, not by React&apos;s state.</li>
                        <li>Form elements like input fields, checkboxes, and radio buttons have their own internal state that is managed by the browser.</li>
                        <li>When the user interacts with an uncontrolled component, the data is directly read from the DOM using references or other DOM manipulation techniques.</li>
                        <li>Since React is not directly managing the state, you do not need to handle every change manually, resulting in less code in some cases.</li>
                    </ul>
                    <p className='fw-medium'>Controlled Components:</p>
                    <ul>
                        <li>In controlled components, the form data is managed by React&apos;s state.</li>
                        <li>The value of form elements is controlled by React through the value prop (or checked prop for checkboxes and radio buttons).</li>
                        <li>Controlled components give you more control over the form data, allowing you to perform validation and apply logic to the input before updating the state.</li>
                        <li>Since React has control over the state, you can also reset, clear, or set initial values easily.</li>
                    </ul>
                </div>
                <div className='my-4'>
                    <h5>Question 2: How to validate React props using PropTypes?</h5>
                    <p><span className='fw-bold'>Answer: </span>PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don&apos;t receive an error at the very end of our app by the console which might not be easy to deal with. It&apos;s a good practice to use PropTypes to document the expected props for your components and ensure that they are used correctly throughout your application. This can help with code maintainability and make it easier for other developers to understand and use your components.</p>
                </div>
                <div>
                    <h5>Question 3: Tell us the difference between nodejs and express js.</h5>
                    <span className='fw-bold'>Answer: </span>
                    <span>Node.js and Express.js are both popular technologies used in web development, but they serve different purposes and play different roles. Let&apos;s explore the differences between Node.js and Express.js: </span>
                    <p className='fw-medium mt-3'>Node.js:</p>
                    <ul>
                        <li>Node.js is a JavaScript runtime environment that allows you to execute JavaScript code on the server-side.</li>
                        <li>It is built on Chrome&apos;s V8 JavaScript engine and uses an event-driven, non-blocking I/O model, which makes it efficient and suitable for scalable, real-time applications.</li>
                        <li>With Node.js, you can build server-side applications, APIs, command-line tools, and more.</li>
                        <li>Node.js is not limited to web development; it can be used for various purposes like desktop applications and Internet of Things (IoT) projects.</li>
                    </ul>
                    <p className='fw-medium'>Express.js:</p>
                    <ul>
                        <li>Express.js is a web application framework for Node.js. It is not a separate technology; rather, it is built on top of Node.js, providing additional abstractions and utilities to make web development easier and more organized.</li>
                        <li>Express.js simplifies the process of building web servers and APIs by providing features like routing, middleware support, and template rendering.</li>
                        <li>It is minimalistic and unopinionated, which means developers have more flexibility in structuring their applications and choosing the libraries they want to use.</li>
                        <li>Express.js allows you to handle HTTP requests and responses, define routes, serve static files, and implement middleware for tasks like authentication, logging, and error handling.</li>
                    </ul>
                </div>
                <div>
                    <h5>Question 4: What is a custom hook, and why will you create a custom hook?</h5>
                    <p>
                        <span className='fw-bold'>Answer: </span>
                        A custom hook in React is a JavaScript function that utilizes the &quot;Hooks&quot; feature introduced in React 16.8. Custom hooks allow you to extract and reuse stateful logic from components, making it easier to share and organize code across multiple components. Custom hooks follow a specific naming convention: their names should start with &quot;use&quot; to indicate that they are hooks.
                    </p>
                </div>
            </Container>
            <p className='text-center'>
                <Button
                    onClick={downloadPDF}
                    disabled={loader}
                    className='fw-medium' variant="warning">
                    {loader ? <span>Downloading...</span> : <span>Download as pdf</span>}
                </Button>
            </p>
        </div>
    );
};

export default Blogs;

import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-bg py-5 '>
            <div className="container text-light">
                <div className=' d-flex justify-content-between align-items-center'>
                    <div>
                    <p className='fw-bold primary-color'>SUBSCRIBE NEW AND GO PREMIUM FOR ONE MONTH</p>
                        <h4 className='fw-bold'>Subscribe to our newsletter and get all the updates</h4>
                        
                    </div>
                    <div className="subscribe-form">
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Subscribe here"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-primary">Click</Button>
                        </Form>
                    </div>
                </div>
                <hr className='text-light text-center px-4' />
                <div className="footer-body row gx-4 my-5" >
                    <div className="col-md-4 ">
                        <h2><i className="fab fa-edge-legacy"></i>-learner</h2>
                        <p className='mt-4'>We provide a vast variety of courses which can help you become job ready!</p>
                    </div>
                    <div className="col-md-4 ps-5 ">
                        <h4>Contacts</h4>
                        <p className='mt-4'>Mon – Fri: 10.00am-5.00pm</p>
                        <p>Fort, Mumbai, India</p>
                        <p>(+91) 9960322104</p>
                        <p className='primary-color'>info@e-learner.com</p>

                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default Footer;

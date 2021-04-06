import React from 'react';
import { Button, Form } from 'react-bootstrap'; 

import './LandingPage.css'; 

const landingStyle = {
    backgroundColor: 'rgb(245, 245, 245)', 
    display: 'flex', 
    justifyContent: 'center', 
    padding: '10rem 2rem'  
}

const LandingPage = () => {
    return (
        <div style={landingStyle}>
            <div className='text'>
                <div className="title">
                    Revo Bookings 
                </div>
                <div className="subtitle">
                    Revo bookings help you keep track of your bookings in our facility.
                </div>
            </div>
            <div className="form-card">
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Email address" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button block variant="primary">Log In</Button>
                    <hr/>
                    <div style={{display: 'flex', justifyContent: 'center'}} >
                        <Button size="lg" variant="danger">Create New Account</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default LandingPage;  

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'; 

import './LandingPage.css'; 

const landingStyle = {
    backgroundColor: 'rgb(245, 245, 245)', 
    display: 'flex', 
    justifyContent: 'center', 
    padding: '10rem 2rem'  
}

const LandingPage = () => {
    const [validated, setValidated] = useState(false); 

    const handleSubmit = (event) => {
        const form = event.currentTarget; 
        event.preventDefault();
        if (form.checkValidity() === false) {
             
            event.stopPropagation(); 
        }

        setValidated(true); 
    }

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
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group hasValidation controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Email address" required/>
                        <Form.Control.Feedback type="invalid">
                            Does n't look right!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="Password" required />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Does n't look right!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button block type="submit" variant="primary">Log In</Button>
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

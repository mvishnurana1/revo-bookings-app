import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'; 

import './LandingPage.css'; 
import SignUpModal from '../SignUpModal/SignUpModal'; 

const LandingPage = () => {
    const [validated, setValidated] = useState(false); 
    const [showModal, setModalShow] = useState(false); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  

    const handleSubmit = (event) => {
        const form = event.currentTarget; 
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation(); 
        }

        setValidated(true); 
    }

    return (
        <div className='landingPage'>
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
                        <Form.Control 
                            type="email" 
                            placeholder="Email address" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Does n't look right!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Does n't look right!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button block type="submit" variant="primary">
                        Log In
                    </Button>
                    <hr/>
                    <div style={{display: 'flex', justifyContent: 'center'}} >
                        <Button onClick={() => setModalShow(true)} size="lg" variant="danger">
                            Create New Account
                        </Button>
                    </div>
                </Form>
                <SignUpModal show={showModal} onHide={() => setModalShow(false)} />
            </div>
        </div>
    )
}

export default LandingPage;  

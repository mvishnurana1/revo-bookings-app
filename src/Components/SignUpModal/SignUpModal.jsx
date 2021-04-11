import React, { useState } from 'react';
import FontAwesome from 'react-fontawesome'; 
import { Button, Form, Modal } from 'react-bootstrap';

const SignUpModal = (props) => {
    const [validated, setValidated] = useState(false);
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    return (
        <Modal 
            autoFocus={true} 
            centered
            {...props} 
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div style={{alignItems: 'flex-start', display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <div>Sign Up</div>
                            <div style={{fontSize: '16px', color: 'grey'}}>It's quick and easy.</div>
                        </div>
                            <button style={{marginLeft: '18rem'}} className="button">
                                <FontAwesome
                                    className="window-close"
                                    onClick={props.onHide}
                                    name="window-close"
                                    size="x"
                                />
                            </button>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group hasValidation controlId="formGroupUsername">
                        <Form.Control 
                            type="text" 
                            placeholder="Username" 
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Does n't look right!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group hasValidation controlId="formGroupEmail">
                        <Form.Control 
                            type="email" 
                            placeholder="Email address" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Does n't look right!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <hr/>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button
                            style={{
                                backgroundColor: 'rgb(200, 35, 51)',
                                border: '0', 
                                width: '11rem'
                            }}
                            type="submit"
                        >
                            Sign up
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default SignUpModal; 

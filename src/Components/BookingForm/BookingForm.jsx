import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

import './BookingForm.css';

class BookingForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstName:'', 
      lastName:'', 
      date:'', 
      time:'', 
      phoneNumber:''
    }
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Row>
            <Form.Group as={Col} md={2}>
              <Form.Control
                required
                type="text"
                placeholder="First Name"
                name="firstName"
              />
            </Form.Group>

            <Form.Group as={Col} md={2}>
              <Form.Control
                required
                type="text"
                placeholder="Last Name"
                name="lastName"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
          <Form.Group as={Col} md={2}>
            <Form.Control
              required
              type="date"
              name="date"
            />
          </Form.Group>

          <Form.Group as={Col} md={2}>
            <Form.Control  
              required
              placeholder="start"
              type="time"
              name="starttime"
            />
          </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md={2}>
            <Form.Control
              required
              name="phoneNumber"
              placeholder="Phone Number"
            />
            </Form.Group>

            <Form.Group as={Col} md={2}>
            <Form.Control  
              required
              placeholder="start"
              type="time"
              name="endtime"
            />
          </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md={2}>
              <Button 
                variant="outline-primary light" 
                type="submit"
                >
                Submit
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </div >
    )
  }
}

export default BookingForm; 
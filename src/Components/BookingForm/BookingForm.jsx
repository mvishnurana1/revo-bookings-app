import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
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
      <div className="form">
        <Form style={{ 
              display: 'flex', 
              alignItems: 'center', 
              flexDirection: 'column', 
        }}>
              <Form.Row>
              <Form.Control
                className="field"
                required
                type="text"
                placeholder="First Name"
                name="firstName"
              />
              <Form.Control
                className="field"
                required
                type="text"
                placeholder="Last Name"
                name="lastName"
              />
            </Form.Row>

          <Form.Row>
            <Form.Control
              className="field"
              required
              type="date"
              name="date"
            />
            <Form.Control  
              className="field"
              required
              placeholder="start"
              type="time"
              name="starttime"
            />
            </Form.Row>

          <Form.Row>
            <Form.Control
              className="field"
              required
              name="phoneNumber"
              placeholder="Phone Number"
            />
            <Form.Control
              className="field"  
              required
              placeholder="start"
              type="time"
              name="endtime"
            />
            </Form.Row>
              <Button 
                style={{ marginTop: '1rem'}}
                variant="primary" 
                type="submit"
                >
                Submit
              </Button>
        </Form>
      </div >
    )
  }
}

export default BookingForm; 

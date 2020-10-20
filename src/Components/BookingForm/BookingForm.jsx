import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

import './BookingForm.css';

class BookingForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      bookingDate:'',
      endTime: '', 
      firstName:'', 
      lastName:'', 
      phoneNumber:'', 
      startTime:''
    }
    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }); 
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="form">
        <Form onSubmit={this.handleSubmit}>
              <Form.Row>
              <Form.Control
                className="field"
                name="firstName"
                onChange={this.handleChange}
                placeholder="First Name"
                required
                type="text"
                value={this.state.firstName}
              />
              <Form.Control
                className="field"
                name="lastName"
                onChange={this.handleChange}
                placeholder="Last Name"
                required
                type="text"
                value={this.state.lastName}
              />
            </Form.Row>

          <Form.Row>
            <Form.Control
              className="field"
              name="bookingDate"
              onChange={this.handleChange}
              type="date"
              required
              value={this.state.bookingDate}
            />
            <Form.Control  
              className="field"
              name="startTime"
              onChange={this.handleChange}
              type="time"
              required
              value={this.state.startTime}
            />
            </Form.Row>

          <Form.Row>
            <Form.Control
              className="field"
              name="phoneNumber"
              onChange={this.handleChange}
              placeholder="Phone Number"
              value={this.state.phoneNumber}
              required
            />
            <Form.Control
              className="field"  
              type="time"
              name="endTime"
              onChange={this.handleChange}
              value={this.state.endTime}
              required
            />
            </Form.Row>
            <div className='buttonContainer'>
              <Button 
                style={{ marginTop: '1rem'}}
                type="submit"
                value="submit"
                variant="primary" 
                >
                  Submit
                </Button>
            </div>
        </Form>
      </div >
    )
  }
}

export default BookingForm; 

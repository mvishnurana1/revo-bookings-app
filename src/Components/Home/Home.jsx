import Moment from 'react-moment'; 
import React from 'react';

import './Home.css'; 
import getWeekDay from '../../Global/Dayparser'; 
import bookings from '../../Global/Static/bookings'; 

const card = {
    backgroundColor: 'rgb(240, 240, 240)', 
    display: 'flex', 
    height: '5rem',
    margin: '1rem', 
    padding: '1rem', 
    width: '30rem'
}

const Home = () => {
    return bookings.map((booking) => <div className='bookings' key={booking.id}>
        <div className='date'>
            <>
                {getWeekDay(booking.dateTime.getDay())}, {' '}
                <Moment format="DD/MM/YYYY">{booking.dateTime}</Moment>
            </>
        </div>
        <div style={card}>
            <div className="time">
                {`${booking.dateTime.getHours()}:${booking.dateTime.getMinutes() ? booking.dateTime.getMinutes():'00'}`}
            </div>
            <div className="bookingInfo">
                <div className="bookingName">{booking.name}</div>
                <div className="bookingLocation">{booking.location}</div>
            </div>
        </div>
    </div>)
}

export default Home; 

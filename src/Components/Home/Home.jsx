import React from 'react'; 

const bookings = [
    {
        id: '1233', 
        name: 'Vishnu Rana', 
        dateTime: new Date('2021-04-09').toISOString(), 
        location: 'Coaches Box 1'
    }, {
        id: '1234', 
        name: 'Mahesh Pratap Rana', 
        dateTime: new Date('2021-04-09').toISOString(), 
        location: 'Coaches Box 2'
    }, {
        id: '1235', 
        name: 'Subhash Chander Atri', 
        dateTime: new Date('2021-04-09').toISOString(), 
        location: 'Floor ball 1'
    }
]

const Home = () => {
    return bookings.map((booking) => <div key={booking.id}>
        {booking.location}
    </div>)
}

export default Home; 

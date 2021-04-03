import React from 'react';
import FontAwesome from 'react-fontawesome'; 

import './Navbar.css'; 

const Navbar = () => {
    return <div className="navbar">
        <FontAwesome
            className="home logo"
            name="home"
            size="3x"
        />
        <FontAwesome
            className="calendar logo"
            name="calendar"
            size="3x"
        />
        <FontAwesome
            className="flag logo"
            name="flag"
            size="3x"
        />
        <FontAwesome
            className="user-circle logo"
            name="user-circle"
            size="3x"
        />
    </div>
}

export default Navbar; 

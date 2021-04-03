import React from 'react';
import FontAwesome from 'react-fontawesome'; 

import './Navbar.css'; 

const Navbar = () => {
    return <div className="navbar" style={{ display: 'flex'}}> 
    <button className="button">
        <FontAwesome
            className="book logo"
            name="book"
            size="3x"
        />
    </button>

    <div style={{ display: 'flex' }}>
        <button className="button">
            <FontAwesome
                className="home logo"
                name="home"
                size="3x"
            />
        </button>

        <button className="button">
            <FontAwesome
                className="calendar logo"
                name="calendar"
                size="3x"
            />
        </button>

        <button className="button">
            <FontAwesome
                className="bell logo"
                name="bell"
                size="3x"
            />
        </button>
    </div>

    <button className="button">
     <div className="accountLogo">
            <FontAwesome
                className="user-circle logo"
                name="user-circle"
               size="3x"
            />
     </div>
    </button>
    </div>
}

export default Navbar; 

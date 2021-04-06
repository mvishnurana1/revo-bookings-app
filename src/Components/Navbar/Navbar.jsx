import React from 'react';
import FontAwesome from 'react-fontawesome'; 
import { useLocation } from 'react-router-dom'; 

import './Navbar.css'; 

const Navbar = () => {
    let location = useLocation(); 

    return <div className="navbar"> 
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
                style={location.pathname === '/'? { color: 'blue' }: null}
            />
        </button>

        <button className="button">
            <FontAwesome
                className="calendar logo"
                name="calendar"
                size="3x"
                style={location.pathname === '/bookings'? { color: 'blue' }: null}
            />
        </button>

        <button className="button">
            <FontAwesome
                className="bell logo"
                name="bell"
                size="3x"
                style={location.pathname === '/notifications'? { color: 'blue' }: null}
            />
        </button>
    </div>

    <button className="button">
     <div className="accountLogo">
            <FontAwesome
                className="user-circle logo"
                name="user-circle"
                size="3x"
                style={location.pathname === '/account'? { color: 'blue' }: null}
            />
     </div>
    </button>
    </div>
}

export default Navbar; 

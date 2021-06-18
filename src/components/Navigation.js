import React from 'react';
import logo from '../assets/logo102.png';

const Navigation = () => {
    return (
        <div className="navbar">
            <img className="nav-logo" src={logo} alt="logo" />
            <ul>
                <li className="nav-contact">Contact</li>
                <li className="nav-menu">Menu</li>
            </ul>
        </div>
    );
};

export default Navigation;
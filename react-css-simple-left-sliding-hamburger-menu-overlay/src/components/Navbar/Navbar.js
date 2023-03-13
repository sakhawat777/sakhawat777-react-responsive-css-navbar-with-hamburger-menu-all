import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
         <input type="checkbox" className="toggler"/>
    <div className="hamburger"><div></div></div>
    <div className="menu">
        <div>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </div>
    </div>
      </>
      
    );
};

export default Navbar;
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
        <label>
        <input type="checkbox"/>
        <span className="menu"> <span className="hamburger"></span> </span>
        <ul>
          <li> <a href="#">Home</a> </li>
          <li> <a href="#">About</a> </li>
          <li> <a href="#">Contact</a> </li>
        </ul>
        </label>
        <h1>Morphing Fullscreen Hamburger Menu Demo</h1>
      </>
      
    );
};

export default Navbar;
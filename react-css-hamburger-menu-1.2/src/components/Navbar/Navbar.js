import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <section className="top-nav">
        <div>
          Logo Here
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label className='menu-button-container' htmlFor="menu-toggle">
        <div className='menu-button'></div>
      </label>
        <ul className="menu">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
        </ul>
      </section>
      
    );
};

export default Navbar;
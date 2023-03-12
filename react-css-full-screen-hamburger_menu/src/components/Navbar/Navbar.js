import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
      <section>
        <h1><span style={{ fontSize: '2.75em' }}>100% CSS</span><br></br>Hamburger Animation</h1>

          <input id="toggle" type="checkbox"></input>

          <label htmlFor="toggle" className="hamburger">
            <div className="top-bun"></div>
            <div className="meat"></div>
            <div className="bottom-bun"></div>
          </label>

          <div className="nav">
            <div className="nav-wrapper">
              <nav>
                <a href="#">HOME</a><br></br>
                <a href="#">ABOUT</a><br></br>
                <a href="#">WORK</a><br></br>
                <a href="#">SERVICES</a>
              </nav>
            </div>
          </div>
        </section>
      
    );
};

export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className ="navbar">
            <ul>
              <li><NavLink to="/" exact >Home</NavLink></li>
              <li><NavLink to="/shop" className="nav-link">Shop Products</NavLink></li>
              <li><NavLink to="/hairstyles" className="nav-link">Hairstyles</NavLink></li>
              <li><NavLink to="/contact" className="nav-link">Contact Us</NavLink></li>
            </ul>
        </div>
    );
};

export default Navbar;


  
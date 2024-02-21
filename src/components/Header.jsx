import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (<header>
        <div className="logo">
                <img src="C:\Users\Public\Pictures\Screenshot 2024-02-14 100818.png" alt="Cut and Click Logo" />
            </div>
        <h1>Cut and Click</h1>
        <h2>Crafting Excellence, Clicking Success.</h2>
        <nav aria-label="Main Navigation" role="navigation">
            <ul class="navBar">
                <li><NavLink to="/" exact >Home</NavLink></li>
                <li><NavLink to="/shop" className="nav-link">Shop Products</NavLink></li>
                <li><NavLink to="/hairstyles" className="nav-link">Hairstyles</NavLink></li>
                <li><NavLink to="/contact" className="nav-link">Contact Us</NavLink></li>
            </ul>
        </nav>
        
    </header>
    )
}
export default Header;
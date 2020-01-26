import React from 'react'

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="nav-brand"><span className="bold">Dev</span>Network</h1>
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects" className="nav-link">Projects</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/community" className="nav-link">Community</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;

import React from 'react'

import { NavLink } from 'react-router-dom';

import { GoCode } from 'react-icons/go';

const Navbar = () => {

    const route = window.location.pathname;

    return (
        <div className="navbar">
            <h1 className="nav-brand"><GoCode className="icon" /> <span className="bold">Dev</span>Network</h1>
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to="/" className={`nav-link ${route === '/' ? 'active-link' : ''}`} >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects" className={`nav-link ${route === '/projects' ? 'active-link' : ''}`}>Projects</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/community" className={`nav-link ${route === '/community' ? 'active-link' : ''}`}>Community</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className={`nav-link ${route === '/about' ? 'active-link' : ''}`}>About</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;

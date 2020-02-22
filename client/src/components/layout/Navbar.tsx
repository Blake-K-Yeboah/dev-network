import React, { useState } from 'react'

import { NavLink } from 'react-router-dom';

import { GoCode } from 'react-icons/go';

const Navbar = () => {

    // For Dropdown
    const [status, setStatus] = useState(false);

    const route = window.location.pathname;

    return (
        <div className="navbar">
            <h1 className="nav-brand"><GoCode className="icon" /> <span className="bold">Dev</span>Network</h1>
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to="/" className={`nav-link ${route === '/' ? 'active-link' : ''}`} >Home</NavLink>
                </li>
                <li className="nav-item">
                    <span className={`nav-link ${route === '/users' || route === '/projects' || route === '/community' ? 'active-link' : ''}`} onClick={() => setStatus(!status)}>Browse</span>

                    <div className={`dropdown ${status ? '' : 'hidden'}`}>

                        <NavLink to="/projects" className={`dropdown-link ${route === '/projects' ? 'active-link' : ''}`}>Projects</NavLink>

                        <NavLink to="/users" className={`dropdown-link ${route === '/users' ? 'active-link' : ''}`}>Users</NavLink>

                        <NavLink to="/community" className={`dropdown-link ${route === '/community' ? 'active-link' : ''}`}>Community</NavLink>

                    </div>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className={`nav-link ${route === '/about' ? 'active-link' : ''}`}>About</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
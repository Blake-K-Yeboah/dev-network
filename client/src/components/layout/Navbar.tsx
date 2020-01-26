import React from 'react'

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <h1>DevNetwork</h1>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/community">Community</NavLink>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;

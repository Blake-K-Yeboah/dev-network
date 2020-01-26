import React from 'react'
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

const Header = inject('authStore')(
    observer(({ authStore }) => {

        console.log(authStore.token);

        const loggedIn = (
            <div className="header">
                <h1>Hello</h1>
            </div>
        )

        const loggedOut = (
            <div className="header">
                <h1 className="title">Welcome to Developer Network</h1>

                <p className="description">DevNetwork is a social network built with the MERN Stack; Its fast and performant and allows users to share their latest projects with the developer community. If you're  a developer looking to share your talent across the tech community, then this is for you.</p>

                <div className="btn-group">
                    <NavLink to="/register">
                        <button className="btn btn-primary">Create an Account</button>
                    </NavLink>
                    <span className="or">OR</span>
                    <NavLink to="/login">
                        <button className="btn btn-outline">Login</button>
                    </NavLink>
                </div>
            </div>
        )
        return (
            <>{authStore.isAuthenticated ? loggedIn : loggedOut}</>
        )

    }));

export default Header

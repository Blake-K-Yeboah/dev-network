import React from 'react'
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import { MdError } from 'react-icons/md';

const Header = inject('authStore')(
    observer(({ authStore, page }) => {

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
                        <button className="btn primary">Create an Account</button>
                    </NavLink>
                    <span className="or">OR</span>
                    <NavLink to="/login">
                        <button className="btn outline">Login</button>
                    </NavLink>
                </div>
            </div>
        )

        const pageRoute: string = window.location.pathname;


        const notFound = (
            <div className="header not-found">
                <h1 className="title"><MdError style={{ top: '10px', marginRight: '10px', position: 'relative' }} /> 404 - Page Not Found</h1>
                <p className="description">There is no page associated with the path '{pageRoute as string}' </p>
                <NavLink to="/">
                    <button className="btn primary">Redirect To Home</button>
                </NavLink>
            </div>
        )

        return (
            <>{authStore.isAuthenticated && page !== "notfound" ? loggedIn : page !== "notfound" ? loggedOut : notFound}</>
        )

    }));

export default Header

import React from 'react'
import { inject, observer } from 'mobx-react';
import { NavLink, useHistory } from 'react-router-dom';
import { MdError } from 'react-icons/md';
import Axios from 'axios';
import { IStoreProps } from '../../../types';

const Header = inject('authStore')(
    observer(({ authStore, page }: IStoreProps) => {

        let history = useHistory();

        // Handle Logout
        const logOutHandler = () => {

            let currentDate = new Date();

            currentDate.setMonth(currentDate.getMonth() - 1);

            document.cookie = `jwtToken=; expires= ${currentDate}`;

            delete Axios.defaults.headers.common["Authorization"];

            authStore.setCurrentUser(null);

            history.push('/login');
        }

        const loggedIn = (
            <div className="header">
                <h1 className="title">Welcome Back!</h1>

                <p className="description">Welcome back to developer network. Hope you're having a great day! You can explore the latest projects by clicking the button below. Alternatively you can view your profile. Remember to keep calm and coding! :&#41;</p>

                <div className="btn-group">
                    <NavLink to="/projects">
                        <button className="btn primary">Latest Projects</button>
                    </NavLink>
                    <span className="or">OR</span>
                    <NavLink to={`/profile/${authStore.user ? authStore.user.username.substring(1) : ''}`}>
                        <button className="btn outline">Your Profile</button>
                    </NavLink>
                </div>

                <span className="link special" onClick={logOutHandler}>Logout</span>
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
                <button className="btn primary" onClick={() => history.goBack()}>Go Back</button>

            </div>
        )

        return (
            <>{authStore.isAuthenticated && page !== "notfound" ? loggedIn : page !== "notfound" ? loggedOut : notFound}</>
        )

    }));

export default Header

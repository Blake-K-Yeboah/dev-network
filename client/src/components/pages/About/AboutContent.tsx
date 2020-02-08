import React from 'react'
import { NavLink } from 'react-router-dom'

const AboutContent = () => {
    return (
        <div className="header">
            <h1 className="title">About DevNetwork</h1>

            <div className="header-grid">

                <img src="/img/logo.jpg" className="logo" alt="DevNetwork Logo" />

                <p className="description ">DevNetwork is a social network built with MERN stack that allows developers to share their projects andd write posts about their favourite technologies. It was developed by Blake Yeboah, a fullstack developer based in Austraalia.
                <NavLink to="/" className="link special">Go Back Home</NavLink> </p>

            </div>
        </div>
    )
}

export default AboutContent;

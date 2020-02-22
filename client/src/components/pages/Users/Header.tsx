import React from 'react'
import UserCarousel from './UserCarousel/UserCarousel'

const Header = () => {
    return (
        <div className="header projects">

            <h1 className="title">Explore Users</h1>

            <UserCarousel />

        </div>
    )
}

export default Header

import React from 'react'
import ProjectCarousel from './ProjectCarousel/ProjectCarousel';

const Header = () => {
    return (
        <div className="header projects">

            <h1 className="title">Explore Projects</h1>

            <ProjectCarousel />

        </div>
    )
}

export default Header;

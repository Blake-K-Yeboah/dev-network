import React from 'react'
import { inject, observer } from 'mobx-react';
import ProjectCarousel from './ProjectCarousel/ProjectCarousel';

const Header = inject('projectStore')(observer(({ projectStore }) => {
    return (
        <div className="header projects">

            <h1 className="title">Explore Projects</h1>

            <ProjectCarousel />

            <button className="btn primary" onClick={(): void => projectStore.toggleStatus()}>Post A Project</button>

        </div>
    )
}))

export default Header;

import React from 'react'
import { inject, observer } from 'mobx-react';

const Header = inject('authStore', 'projectStore')(observer(({ authStore, projectStore }) => {
    return (
        <div className="header projects">

            <h1 className="title">Explore Projects</h1>

            {/* Post List COmponent*/}

            <button className="btn primary" onClick={(): void => projectStore.toggleStatus()}>Post Project</button>

        </div>
    )
}))

export default Header;

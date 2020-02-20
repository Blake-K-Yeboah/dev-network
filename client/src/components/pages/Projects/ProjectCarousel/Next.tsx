import React from 'react'
import { inject, observer } from 'mobx-react';

const Next = inject('projectStore')(observer(({ projectStore }) => {
    return (
        <button className={`circle-btn next ${projectStore.projects && !projectStore.projects[projectStore.activeProjectIndex + 1] ? 'disabled' : ''}`} onClick={projectStore.nextProject}>
            <span className="icon">&gt;</span>
        </button>
    )
}));

export default Next;

import React from 'react'
import { inject, observer } from 'mobx-react';
import { IStoreProps } from '../../../../types';

const Next = inject('projectStore')(observer(({ projectStore }: IStoreProps) => {
    return (
        <button className={`circle-btn next ${projectStore.projects && !projectStore.projects[projectStore.activeProjectIndex + 1] ? 'disabled' : ''}`} onClick={projectStore.nextProject}>
            <span className="icon">&gt;</span>
        </button>
    )
}));

export default Next;

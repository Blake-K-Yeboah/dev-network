import React from 'react'
import { inject, observer } from 'mobx-react';
import { IStoreProps } from '../../../../types';

const Previous = inject('projectStore')(observer(({ projectStore }: IStoreProps) => {
    return (
        <button className={`circle-btn previous ${projectStore.projects && !projectStore.projects[projectStore.activeProjectIndex - 1] ? 'disabled' : ''}`} onClick={() => projectStore.prevProject()}>
            <span className="icon">&lt;</span>
        </button>
    )
}))

export default Previous;

import React from 'react'
import { inject, observer } from 'mobx-react';

const Previous = inject('projectStore')(observer(({ projectStore }) => {
    return (
        <button className="circle-btn previous" onClick={projectStore.prevProject}>
            <span className="icon">&lt;</span>
        </button>
    )
}))

export default Previous;

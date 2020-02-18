import React from 'react'
import { inject, observer } from 'mobx-react';

const Next = inject('projectStore')(observer(({ projectStore }) => {
    return (
        <button className="circle-btn next" onClick={projectStore.nextProject}>
            <span className="icon">&gt;</span>
        </button>
    )
}));

export default Next;

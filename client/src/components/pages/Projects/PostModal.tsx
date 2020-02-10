import React from 'react'
import { inject, observer } from 'mobx-react';

const PostModal = inject('authStore', 'projectStore')(observer(({ authStore, projectStore }) => {
    return (
        <div className={`modal ${!projectStore.modalStatus ? 'hidden' : ''}`}>
            <span className="close-icon" onClick={() => projectStore.toggleStatus()}>&times;</span>
            <h1 className="title">Post A Project</h1>
        </div>
    )
}))

export default PostModal

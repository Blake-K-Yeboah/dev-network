import React from 'react'
import { inject, observer } from 'mobx-react'
import { IStoreProps } from '../../../types'

const CreateModal = inject('authStore', 'communityStore')(observer(({ authStore, communityStore }: IStoreProps) => {
    return (
        <div className={`modal ${!communityStore.modalStatus ? 'hidden' : ''}`}>
            <span className="close-icon" onClick={() => communityStore.toggleStatus()}>&times;</span>
            <h1 className="title">Create a Post</h1>
        </div>
    )
}))

export default CreateModal

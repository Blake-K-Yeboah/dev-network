import React from 'react'
import { inject, observer } from 'mobx-react'
import { IStoreProps } from '../../types'

const MessageModal = inject('messageStore')(observer(({ messageStore }: IStoreProps) => {
    return (
        <>
            <div className={`modal ${!messageStore.modalStatus ? 'hidden' : ''}`}>
                <span className="close-icon" onClick={() => messageStore.toggleStatus()}>&times;</span>
                <h1 className="title">Your Messages</h1>
            </div>

            <div className={`overlay ${!messageStore.modalStatus ? 'hidden' : ''}`} onClick={() => messageStore.toggleStatus()}></div>
        </>
    )
}))

export default MessageModal

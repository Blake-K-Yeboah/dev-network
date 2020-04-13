import React from 'react'
import { inject, observer } from 'mobx-react'
import { IStoreProps } from '../../types'
import MessageAccordion from './MessageAccordion'

const MessageModal = inject('messageStore')(observer(({ messageStore }: IStoreProps) => {
    return (
        <>
            <div className={`modal ${!messageStore.modalStatus ? 'hidden' : ''}`}>
                <span className="close-icon" onClick={() => messageStore.toggleStatus()}>&times;</span>
                <h1 className="title">Your Messages</h1>

                <MessageAccordion />

            </div>

            <div className={`overlay ${!messageStore.modalStatus ? 'hidden' : ''}`} onClick={() => messageStore.toggleStatus()}></div>
        </>
    )
}))

export default MessageModal

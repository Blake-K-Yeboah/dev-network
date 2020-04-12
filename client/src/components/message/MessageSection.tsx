import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { inject, observer } from 'mobx-react'
import { IStoreProps } from '../../types'

const MessageSection = inject('messageStore')(observer(({ messageStore }: IStoreProps) => {
    return (
        <div className="message-section">
            <FaEnvelope className="icon" />
            <h3 className="view-messages" onClick={() => messageStore.toggleStatus()}>View Messages</h3>
        </div>
    )
}));

export default MessageSection


















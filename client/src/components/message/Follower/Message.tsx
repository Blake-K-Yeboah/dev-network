import React from 'react'
import { inject, observer } from 'mobx-react'
import { IStoreProps } from '../../../types'

const Message = inject('authStore')(observer(({ authStore, message }: IStoreProps) => {
    return (
        <div className={`message-container ${message.from === authStore.user.id ? 'primary' : 'secondary'}`}>

            <span className='message-content'>

                {message.text}

            </span>

            <br />

            <small className="sent-text">

                Sent {message.sentOn.substring(8, 10)}/{message.sentOn.substring(5, 7)}

            </small>

        </div>
    )
}))

export default Message

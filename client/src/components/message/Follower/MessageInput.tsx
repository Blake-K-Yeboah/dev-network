import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import { IStoreProps } from '../../../types';
import Axios from 'axios';

const MessageInput = inject("authStore", "messageStore")(observer(({ authStore, messageStore, to }: IStoreProps) => {

    const [message, setMessage] = useState('');

    const sendMessage = () => {
        const body = {
            text: message,
            from: authStore.user.id,
            to: to
        }

        Axios.post('/api/messages', body).then(res => {

            setMessage('');

        }).catch(err => console.error(err));

    }

    return (
        <div className="input-section">

            <input type="text" className="message-input" placeholder="Message: " value={message} onChange={e => setMessage(e.target.value)} />

            <button className="message-send-btn" onClick={sendMessage}>Send</button>

        </div>
    )
}));

export default MessageInput

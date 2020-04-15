import React, { useEffect, useRef } from 'react'
import { inject, observer } from 'mobx-react';
import { IStoreProps, IMessage } from '../../../types';
import Spinner from '../../Spinner';
import Message from './Message';

const Messages = inject('messageStore', 'authStore')(observer(({ messageStore, userId, authStore }: IStoreProps) => {

    const messagesRef = useRef(null);

    useEffect(() => {

        messageStore.fetchMessages();

        if (messagesRef) {

            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;

        }

    }, [messageStore])

    const activeMessages: IMessage[] | null = messageStore.messages ? messageStore.messages.filter((message: IMessage) => (message.from === userId && message.to === authStore.user.id) || (message.to === userId && message.from === authStore.user.id)) : null;

    return (
        <div className="messages" ref={messagesRef}>

            {!activeMessages ? <Spinner /> : activeMessages.map(message => {
                return <Message key={message._id} message={message} />
            })}

        </div>
    )
}));

export default Messages;

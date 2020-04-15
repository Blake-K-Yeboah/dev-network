import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { IStoreProps, Iuser, IMessage } from '../../../types'
import { NavLink } from 'react-router-dom'
import io from 'socket.io-client'
import MessageInput from './MessageInput'
import Messages from './Messages'

const Follower = inject('messageStore', 'usersStore')(observer(({ messageStore, id, usersStore }: IStoreProps) => {

    let socket: any = null;

    const initSocketConnection = () => {
        socket = io('http://localhost:5000/');
    }

    const setupSocketListeners = () => {
        socket.on('message', (message: IMessage) => {

            const alreadySentTestMessages = messageStore.messages.filter((msg: IMessage) => msg._id === message._id);

            if (alreadySentTestMessages.length === 0) {

                messageStore.pushMessage(message);

            }

        });
    }
    useEffect(() => {
        initSocketConnection();
        setupSocketListeners();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const user: Iuser | null = usersStore.users ? usersStore.users.filter((user: Iuser) => user._id === id)[0] : null;

    const handleClick = () => {
        if (messageStore.activeFollower !== id) {

            messageStore.setActiveFollower(id);

        } else {

            messageStore.setActiveFollower(null);

        }
    }

    return (
        <>
            <div className={`accordion-head ${messageStore.activeFollower === id ? 'active' : ''}`} onClick={handleClick}>

                {!user ? <h1>Loading</h1>
                    : <NavLink to={`/profile/${user ? user.username.replace('@', '') : ''}`}>
                        <img className="profile-pic" src={`/uploads/profile/${user ? user.profileIcon : ''}`} alt={user ? user.username : ''} />
                        <h2 className="name">{user ? user.firstname : ''} {user ? user.lastname : ''}</h2>
                    </NavLink>}

            </div>

            <div className={`accordion-section ${messageStore.activeFollower === id ? '' : 'hidden'}`}>

                <Messages userId={id} />

                <MessageInput to={id} />

            </div>
        </>
    )
}))

export default Follower

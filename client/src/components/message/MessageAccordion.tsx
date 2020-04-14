import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { IStoreProps } from '../../types'
import Follower from './Follower/Follower'
import io from "socket.io-client";

const MessageAccordion = inject('authStore')(observer(({ authStore }: IStoreProps) => {

    let socket: any = null;

    const initSocketConnection = () => {
        socket = io('http://localhost:5000/');
    }

    useEffect(() => {
        initSocketConnection();
    });

    return (
        <div className="accordion">
            {authStore.user.followers.map((followerID: string) => (
                <Follower id={followerID} key={followerID} />
            ))}
        </div>
    )
}))

export default MessageAccordion

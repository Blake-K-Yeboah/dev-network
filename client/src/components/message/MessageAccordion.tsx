import React from 'react'
import { inject, observer } from 'mobx-react'
import { IStoreProps } from '../../types'
import Follower from './Follower/Follower'

const MessageAccordion = inject('authStore')(observer(({ authStore }: IStoreProps) => {
    return (
        <div className="accordion">
            {authStore.user.followers.map((followerID: string) => (
                <Follower id={followerID} key={followerID} />
            ))}
        </div>
    )
}))

export default MessageAccordion

import React from 'react'
import { inject, observer } from 'mobx-react';
import { Iuser, IStoreProps } from '../../../../../types';
import Spinner from '../../../../Spinner';
import Follower from './Follower';

const FollowerList = inject("usersStore")(observer(({ usersStore, profile }: IStoreProps) => {

    const followers = usersStore.users ? usersStore.users.filter((user: Iuser) => profile.followers.includes(user._id)) : null;

    return (
        <div>
            {!followers ? <Spinner /> : followers.map((follower: Iuser) => {
                return <Follower follower={follower} key={follower._id} />
            })}
        </div>
    )
}))

export default FollowerList

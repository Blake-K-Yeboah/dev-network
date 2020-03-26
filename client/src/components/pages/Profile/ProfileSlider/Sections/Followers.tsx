import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import FollowerList from './FollowerList';
import { IStoreProps } from '../../../../../types';

const Followers = inject('usersStore')(observer(({ usersStore, profile }: IStoreProps) => {

    useEffect(() => {
        usersStore.fetchUsers();
    }, [usersStore]);

    return (
        <div className={`follower-section ${usersStore.activeTab !== 'followers' ? 'hidden' : ''}`}>
            <h1 className="followers-title">Total Followers: {profile.followers.length} </h1>
            <FollowerList profile={profile} />
        </div>
    )
}))

export default Followers

import React from 'react'
import { inject, observer } from 'mobx-react'

const Followers = inject('usersStore')(observer(({ usersStore, profile }) => {
    return (
        <div className={`follower-section ${usersStore.activeTab !== 'followers' ? 'hidden' : ''}`}>
            <h1 className="followers-title">Total Followers: {profile.followers.length} </h1>
        </div>
    )
}))

export default Followers

import React from 'react'
import { inject, observer } from 'mobx-react'

const Follower = inject('usersStore')(observer(({ usersStore, follower }) => {
    return (
        <div className="follower">
            <img className="follower-icon" src={`/uploads/profile/${follower.profileIcon}`} alt={follower.username} />
            <div className="content">
                <h1 className="name">{follower.firstname} {follower.lastname}</h1>
            </div>
            <button className="btn outline">View Profile</button>
        </div>
    )
}))

export default Follower;

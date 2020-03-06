import React from 'react'
import { Iuser } from '../../../../../types';

interface Iprops {
    follower: Iuser;
}
const Follower = (props: Iprops) => {

    const { follower } = props;

    return (
        <div className="follower">
            <img className="follower-icon" src={`/uploads/profile/${follower.profileIcon}`} alt={follower.username} />
            <div className="content">
                <h1 className="name">{follower.firstname} {follower.lastname}</h1>
            </div>
            <button className="btn outline">View Profile</button>
        </div>
    )
}

export default Follower;

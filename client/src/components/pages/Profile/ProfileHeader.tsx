import React from 'react'
import { inject, observer } from 'mobx-react';
import Spinner from '../../Spinner';

const ProfileHeader = inject("authStore")(observer(({ authStore, profile }) => {

    const userCheck = profile && profile._id === authStore.user.id ? true : false;

    const followCheck = profile ? profile.followers.includes(authStore.user.id) : false;

    return (
        <>
            {!profile ? <Spinner />

                : <div className="header profile">

                    <img className="profile-header" src={`/uploads/header/${profile.headerImg}`} alt={`${profile.firstname}'s Header`} />

                    <img className="profile-pic" src={`/uploads/profile/${profile.profileIcon}`} alt={`${profile.firstname}'s Profile Icon`} />

                    <div className="profile-info">

                        <h1 className="profile-name">{profile.firstname} {profile.lastname}</h1>

                        <h6 className="profile-username">{profile.username}</h6>

                        <div className="btn-group">
                            {userCheck ? '' : <button className={`btn ${followCheck ? 'following' : 'primary'}`}>{followCheck ? `Following ${profile.followers.length}` : `Follow ${profile.followers.length}`}</button>}

                            {!userCheck && followCheck ? <button className="btn primary">Message</button> : ''}

                            {userCheck ? <button className="btn warning">Edit Profile</button> : ''}
                        </div>
                    </div>

                </div>}
        </>
    )
}));

export default ProfileHeader

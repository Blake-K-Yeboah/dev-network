import React from 'react'
import { inject, observer } from 'mobx-react';
import Spinner from '../../Spinner';
import ProfileSlider from './ProfileSlider/ProfileSlider';
import Axios from 'axios';
import { FaPencilAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { IStoreProps } from '../../../types';
import NoProfile from './NoProfile';

const ProfileHeader = inject("authStore", "usersStore")(observer(({ authStore, profile, usersStore }: IStoreProps) => {

    const userCheck = profile && profile._id === authStore.user.id ? true : false;

    const followCheck = profile ? profile.followers.includes(authStore.user.id) : false;

    const followHandler = (): void => {
        if (followCheck) {
            Axios.post(`/api/users/${profile ? profile._id : ''}/unfollow`, { userId: authStore.user.id })
                .then(res => {
                    usersStore.fetchUsers();
                })
                .catch(err => console.error(err));
        } else {
            Axios.post(`/api/users/${profile ? profile._id : ''}/follow`, { userId: authStore.user.id })
                .then(res => {
                    usersStore.fetchUsers();
                })
                .catch(err => console.error(err));
        }
    }

    const iconStyle = {
        position: 'relative' as 'relative',
        left: 6,
        top: 2
    }

    return (
        <>
            {!usersStore.users ? <Spinner />

                : !profile ? <NoProfile />

                    : <div className="header profile">

                        <img className="profile-header" src={`/uploads/header/${profile.headerImg}`} alt={`${profile.firstname}'s Header`} />

                        <img className="profile-pic" src={`/uploads/profile/${profile.profileIcon}`} alt={`${profile.firstname}'s Profile Icon`} />

                        <div className="profile-info">

                            <h1 className="profile-name">{profile.firstname} {profile.lastname}</h1>

                            <h6 className="profile-username">{profile.username}</h6>

                            <div className="btn-group">
                                {userCheck ? '' : <button className={`btn ${followCheck ? 'following' : 'primary'}`} onClick={followHandler}>{followCheck ? `Following ${profile.followers.length}` : `Follow ${profile.followers.length}`}</button>}

                                {!userCheck && followCheck ? <button className="btn primary">Message</button> : ''}

                                <NavLink to={`/profile/edit/${profile.username.replace('@', '')}`}>
                                    {userCheck ? <button className="btn warning edit">Edit Profile <FaPencilAlt style={iconStyle} /> </button> : ''}
                                </NavLink>

                            </div>

                        </div>

                        <ProfileSlider profile={profile} />

                    </div>}
        </>
    )
}));

export default ProfileHeader

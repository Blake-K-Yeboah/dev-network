import React from 'react'
import { inject, observer } from 'mobx-react'
import { Iuser } from '../../../../types';
import Spinner from '../../../Spinner';

const User = inject("usersStore", "authStore")(observer(({ usersStore, authStore }) => {

    const user: Iuser | null = usersStore.users ? usersStore.users[usersStore.activeUserIndex] : null;

    const followCheck = user ? user.followers.includes(authStore.user.id) : false;

    return (
        <>
            {!user ? <Spinner /> :
                <div className={`user ${user._id === authStore.user.id ? 'active' : ''}`}>
                    <img className="user-header" src={`/uploads/header/${user.headerImg}`} alt={`${user.firstname}'s Header`} />
                    <img className="user-profilepic" src={`uploads/profile/${user.profileIcon}`} alt={`${user.firstname}'s Profile Icon`} />
                    <h2 className="name">{user.firstname} {user.lastname}</h2>
                    <p className="small">{user.username}</p>
                    <p className="small">{user.followers.length} Followers</p>
                    <button className={`btn ${followCheck ? 'following' : 'primary'}`}>{followCheck ? 'Following' : 'Follow'}</button>
                </div>
            }
        </>
    )
}))

export default User

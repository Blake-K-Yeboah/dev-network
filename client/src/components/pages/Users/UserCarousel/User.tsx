import React from 'react'
import { inject, observer } from 'mobx-react'
import { Iuser, IStoreProps } from '../../../../types';
import Spinner from '../../../Spinner';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

const User = inject("usersStore", "authStore")(observer(({ usersStore, authStore }: IStoreProps) => {

    const user: Iuser | null = usersStore.users ? usersStore.users[usersStore.activeUserIndex] : null;

    const followCheck = user ? user.followers.includes(authStore.user.id) : false;

    const followHandler = (): void => {
        if (followCheck) {
            Axios.post(`/api/users/${user ? user._id : ''}/unfollow`, { userId: authStore.user.id })
                .then(res => {
                    usersStore.fetchUsers();
                })
                .catch(err => console.error(err));
        } else {
            Axios.post(`/api/users/${user ? user._id : ''}/follow`, { userId: authStore.user.id })
                .then(res => {
                    usersStore.fetchUsers();
                })
                .catch(err => console.error(err));
        }
    }

    return (
        <>
            {!user ? <Spinner /> :
                <div className={`user ${user._id === authStore.user.id ? 'active' : ''}`}>
                    <img className="user-header" src={`/uploads/header/${user.headerImg}`} alt={`${user.firstname}'s Header`} />
                    <img className="user-profilepic" src={`uploads/profile/${user.profileIcon}`} alt={`${user.firstname}'s Profile Icon`} />
                    <NavLink to={`/profile/${user.username.replace('@', '')}`} className="name">{user.firstname} {user.lastname}</NavLink>
                    <p className="small">{user.username}</p>
                    <p className="small">{user.followers.length} follower{user.followers.length > 1 || user.followers.length < 1 ? 's' : ''}</p>
                    <button className={`btn ${followCheck ? 'following' : 'primary'}`} onClick={followHandler}>{followCheck ? 'Following' : 'Follow'}</button>
                </div>
            }
        </>
    )
}))

export default User

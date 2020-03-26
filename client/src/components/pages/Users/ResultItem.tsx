import React from 'react'
import Axios from 'axios';
import { inject, observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { IStoreProps } from '../../../types';

const ResultItem = inject("usersStore")(observer(({ usersStore, result, uid }: IStoreProps) => {

    let history = useHistory();

    const followCheck = result ? result.followers.includes(uid) : false;

    const followHandler = (): void => {
        if (followCheck) {
            Axios.post(`/api/users/${result ? result._id : ''}/unfollow`, { userId: uid })
                .then(res => {
                    usersStore.fetchUsers();
                })
                .catch(err => console.error(err));
        } else {
            Axios.post(`/api/users/${result ? result._id : ''}/follow`, { userId: uid })
                .then(res => {
                    usersStore.fetchUsers();
                })
                .catch(err => console.error(err));
        }
    }

    const redirectToProfile = (): void => {
        history.push(`/profile/${result.username.replace('@', '')}`)
    }
    return (
        <div className="user-result">
            <img src={`/uploads/profile/${result.profileIcon}`} alt={result.username} className="profile-icon" />
            <h3 className="name">{result.firstname} {result.lastname}</h3>
            <h6 className="username">{result.username}</h6>

            <div className="btn-group">
                <button className="btn outline" onClick={redirectToProfile} >View Profile</button>

                <button className={`btn ${followCheck ? 'following' : 'primary'}`} onClick={followHandler}>{followCheck ? 'Following' : 'Follow'}</button>

            </div>

        </div>
    )
}))

export default ResultItem

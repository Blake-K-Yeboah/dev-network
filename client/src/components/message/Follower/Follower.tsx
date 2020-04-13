import React from 'react'
import { inject, observer } from 'mobx-react'
import { IStoreProps, Iuser } from '../../../types'
import { NavLink } from 'react-router-dom';

const Follower = inject('messageStore', 'usersStore')(observer(({ messageStore, id, usersStore }: IStoreProps) => {

    const user: Iuser | null = usersStore.users ? usersStore.users.filter((user: Iuser) => user._id === id)[0] : null;

    return (
        <div className="accordion-head">
            {!user ? <h1>Loading</h1>
                : <NavLink to={`/profile/${user ? user.username.replace('@', '') : ''}`}>
                    <img className="profile-pic" src={`/uploads/profile/${user ? user.profileIcon : ''}`} alt={user ? user.username : ''} />
                    <h2 className="name">{user ? user.firstname : ''} {user ? user.lastname : ''}</h2>
                </NavLink>}
        </div>
    )
}))

export default Follower

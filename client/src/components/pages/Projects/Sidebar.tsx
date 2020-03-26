import React, { useState } from 'react'
import { inject, observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import { FaSearch, FaUser, FaUserTimes, FaPlus } from 'react-icons/fa';
import { IStoreProps } from '../../../types';

const Sidebar = inject('authStore', 'projectStore', 'usersStore')(observer(({ authStore, projectStore, usersStore }: IStoreProps) => {

    const [status, setStatus] = useState(false);

    const { user } = authStore;

    const hideStatus = !status ? 'hidden' : '';

    let history = useHistory();

    const logOutHandler = () => {

        let currentDate = new Date();

        currentDate.setMonth(currentDate.getMonth() - 1);

        document.cookie = `jwtToken=; expires= ${currentDate}`;

        delete Axios.defaults.headers.common["Authorization"];

        authStore.setCurrentUser(null);

        history.push('/login');
    }

    const redirectToProfile = () => {

        history.push(`/profile/${user.username.replace('@', '')}`);

    }

    const route = window.location.pathname;

    const iconStyle = { position: 'relative' as 'relative', left: 6, top: 2 };

    return (
        <div className={`sidebar ${status ? 'open' : ''}`}>
            <span className="toggler" onClick={() => setStatus(!status)}>{status ? '<' : '>'}</span>

            <p className={`heading ${status ? 'hidden' : ''}`}>Your Profile</p>

            <img className={`header-img ${hideStatus}`} src={`/uploads/header/${user.headerImg}`} alt={user.firstname} />

            <img className={`profile-icon ${hideStatus}`} src={`/uploads/profile/${user.profileIcon}`} alt={user.firstname} />

            <h2 className={`name ${hideStatus}`}>
                {user.firstname as string} {user.lastname as string}
            </h2>

            <h4 className={`small ${hideStatus}`}>{user.username as string} ~ {user.followers.length} Followers</h4>

            <button className={`btn primary ${hideStatus}`} onClick={redirectToProfile}>View Profile <FaUser style={iconStyle} /></button>

            <br />

            <button className={`btn outline ${hideStatus} ${route !== '/projects' ? 'hidden' : ''}`} onClick={(): void => projectStore.toggleStatus()}>Post A Project <FaPlus style={iconStyle} /></button>

            <button className={`btn outline ${hideStatus} ${route !== '/users' ? 'hidden' : ''}`} onClick={(): void => usersStore.toggleSearchModalStatus()}>Search Users <FaSearch style={iconStyle} /></button>

            <br />

            <button className={`btn danger ${hideStatus}`} onClick={logOutHandler}>Log Out <FaUserTimes style={iconStyle} /></button>
        </div>
    )
}))

export default Sidebar;

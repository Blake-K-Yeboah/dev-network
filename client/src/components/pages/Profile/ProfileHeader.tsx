import React from 'react'
import { inject, observer } from 'mobx-react';
import Spinner from '../../Spinner';

const ProfileHeader = inject("authStore")(observer(({ authStore, profile }) => {
    return (
        <>
            {!profile ? <Spinner />

                : <div className="header profile">

                    <img className="profile-header" src={`/uploads/header/${profile.headerImg}`} alt={`${profile.firstname}'s Header`} />

                </div>}
        </>
    )
}));

export default ProfileHeader

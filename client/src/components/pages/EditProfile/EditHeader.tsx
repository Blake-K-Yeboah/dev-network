import React from 'react'
import EditInfo from '../EditProfile/Sections/EditInfo'
import EditProfilePic from './Sections/EditProfilePic'
import EditProfileHeader from './Sections/EditProfileHeader'

const EditHeader = () => {
    return (
        <div className="header profile">

            <h1 className="title">Edit Profile</h1>

            <div className="edit-grid">
                <EditInfo />
                <EditProfilePic />
                <EditProfileHeader />
            </div>

        </div>
    )
}

export default EditHeader

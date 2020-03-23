import React from 'react'
import EditInfo from '../EditProfile/Sections/EditInfo'

const EditHeader = () => {
    return (
        <div className="header profile">

            <h1 className="title">Edit Profile</h1>

            <div className="edit-grid">
                <EditInfo />
                <div className="edit-profile-pic">
                    <h2 className="heading">Profile Picture</h2>
                </div>
                <div className="edit-header">
                    <h2 className="heading">Profile Header</h2>
                </div>
            </div>

        </div>
    )
}

export default EditHeader

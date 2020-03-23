import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'

const EditInfo = inject('authStore')(observer(({ authStore }) => {

    const [userInfo, setUserInfo] = useState({
        firstname: authStore.user.firstname,
        lastname: authStore.user.lastname,
        username: authStore.user.username.replace('@', '')
    })

    const clickHandler = (e: React.FormEvent<HTMLInputElement>) => {

        setUserInfo({ ...userInfo, [e.currentTarget.id]: e.currentTarget.value });

    }

    const updateInfo = () => {
        const info = { ...userInfo, username: `@${userInfo.username}` };

        // Insert Request

    }

    return (
        <div className="edit-info">

            <h2 className="heading">Standard Info</h2>

            <div className="content">

                <p className="description">Update your information</p>

                <div className="field-list">

                    <div className="field">

                        <h3 className="field-name">First Name</h3>

                        <input type="text" className="field-input" value={userInfo.firstname} id="firstname" onChange={e => clickHandler(e)} placeholder="First Name: " />

                    </div>

                    <div className="field">

                        <h3 className="field-name">Last Name</h3>

                        <input type="text" className="field-input" value={userInfo.lastname} id="lastname" onChange={e => clickHandler(e)} placeholder="Last Name: " />

                    </div>

                    <div className="field">

                        <h3 className="field-name">Username</h3>

                        <input type="text" className="field-input" value={userInfo.username} id="username" onChange={e => clickHandler(e)} placeholder="UserName: " />

                    </div>

                    <button className="btn primary" onClick={updateInfo}> Update Info </button>

                </div>

            </div>

        </div>
    )
}));

export default EditInfo

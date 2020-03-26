import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import Axios from 'axios';
import jwt_decode from 'jwt-decode';
import { IStoreProps } from '../../../../types';


const EditInfo = inject('authStore')(observer(({ authStore }: IStoreProps) => {

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
        Axios.put(`/api/users/${authStore.user.id}`, info).then(res => {
            // Set token to cookies
            const { token } = res.data;

            let currentDate = new Date();

            currentDate.setMonth(currentDate.getMonth() + 1);

            // Cookie Expires in 1 month
            document.cookie = `jwtToken=${token}; expires=${currentDate}`;

            authStore.setToken(token);

            // Set token to Auth header
            if (token) {
                // Apply authorization token to every request if logged in
                Axios.defaults.headers.common["Authorization"] = token;
            } else {
                // Delete auth header
                delete Axios.defaults.headers.common["Authorization"];
            }

            // Decode token to get user data
            const decoded = jwt_decode(token);

            // Set current user
            authStore.setCurrentUser(decoded);

            // Alert Success
            alert('Successfully Updated');

        }).catch(err => alert('There was an error updating your account.'));
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

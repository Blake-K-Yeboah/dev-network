import React, { useState, useRef } from 'react'
import Axios from 'axios';
import { inject, observer } from 'mobx-react';
import { IStoreProps } from '../../../../types';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

const EditProfileHeader = inject('authStore')(observer(({ authStore }: IStoreProps) => {

    const [fileName, setFileName] = useState('No Image Chosen');

    const [file, setFile] = useState(null);

    const fileRef = useRef(null);

    const fileChange = (files: FileList | null) => {

        let file: any = files ? files[0] : null;

        setFile(file);

        setFileName(file ? file.name : 'No Image Chosen');

        console.log(file);
    }

    let history = useHistory();

    const uploadHeader = () => {

        // Define formData
        const formData = new FormData();

        // Append File on to formData
        formData.append('file', file as any);

        Axios.put(`/api/users/${authStore.user.id}/header`, formData).then(res => {

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

            history.push(`/profile/${authStore.user.username.replace('@', '')}`)
        })

    };

    return (
        <div className="edit-profile-header">

            <div className="content">

                <h2 className="heading">Profile Header</h2>

                <input type="file" ref={fileRef} style={{ display: 'none' }} accept="image/*" onChange={e => fileChange(e.target.files)} />

                <h2 className="file-name">{fileName}</h2>

                <button className="btn primary" onClick={() => { if (fileRef) fileRef.current.click() }}>Choose Image</button>

                <br /> <br />

                <button className="btn warning" onClick={uploadHeader}>Update Profile</button>

            </div>

        </div>
    )
}));

export default EditProfileHeader

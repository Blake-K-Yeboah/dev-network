import React from 'react'
import { useHistory } from 'react-router-dom';

const NoProfile = () => {

    const username = window.location.pathname.split('/')[2];

    let history = useHistory();

    return (
        <div className="header noprofile">
            <h1 className="title">This page doesnt exist</h1>
            <p className="description">No user with username @{username}</p>
            <button className="btn outline" style={{ position: 'relative' as 'relative', left: '50%', top: 30, transform: 'translateX(-50%)' }} onClick={() => { history.goBack() }}>Go Back</button>
        </div>
    )
}

export default NoProfile

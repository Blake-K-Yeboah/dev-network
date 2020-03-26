import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react';
import { IStoreProps } from '../../types';

const CookiePopup = inject('authStore')(observer(({ authStore }: IStoreProps) => {

    useEffect(() => {
        setTimeout(() => setStatus(!authStore.isAuthenticated), 2250);
    }, [authStore.isAuthenticated]);

    const [status, setStatus] = useState(false);

    return (
        <div className={`popup ${status ? '' : 'hidden'}`}>
            <p className="popup-text">This website uses cookies to improve your experience</p>
            <button className="btn primary" onClick={() => setStatus(false)}>Okay!</button>
        </div>
    )
}))

export default CookiePopup;

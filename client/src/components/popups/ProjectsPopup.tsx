import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { IStoreProps } from '../../types';

const ProjectsPopup = inject('authStore')(observer(({ authStore }: IStoreProps) => {

    useEffect(() => {
        setTimeout(() => setStatus(true), 5000);
        setTimeout(() => setStatus(false), 9000);
    }, [authStore.isAuthenticated]);

    const [status, setStatus] = useState(false);

    let history = useHistory();

    return (
        <div className={`popup right ${status ? '' : 'hidden'}`}>
            <p className="popup-text">You can also browse projects on the projects page.</p>
            <button className="btn primary" onClick={() => history.push('/projects')}>Let's Go!</button>
        </div>
    )
}))

export default ProjectsPopup;

import React from 'react'
import { inject, observer } from 'mobx-react'

const Headings = inject('usersStore')(observer(({ usersStore }) => {

    const changeTab = (newTab: string): void => {
        usersStore.setActiveTab(newTab);
    }

    return (
        <ul className="headings">
            <li className={`heading ${usersStore.activeTab === 'project' ? 'active' : ''}`} onClick={() => changeTab('project')}>
                Projects
            </li>
            <li className={`heading ${usersStore.activeTab === 'community' ? 'active' : ''}`} onClick={() => changeTab('community')}>
                Community
            </li>
            <li className={`heading ${usersStore.activeTab === 'followers' ? 'active' : ''}`} onClick={() => changeTab('followers')}>
                Followers
            </li>
            <li className={`heading ${usersStore.activeTab === 'stats' ? 'active' : ''}`} onClick={() => changeTab('stats')}>
                Statistics
            </li>
        </ul>
    )
}));

export default Headings;

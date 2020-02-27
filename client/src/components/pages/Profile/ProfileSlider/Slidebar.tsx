import React from 'react'
import { inject, observer } from 'mobx-react'

const Slidebar = inject('usersStore')(observer(({ usersStore }) => {

    return (
        <div className="slider">
            <div className={`bar pos-${usersStore.activeTab}`}></div>
        </div>
    )
}));

export default Slidebar

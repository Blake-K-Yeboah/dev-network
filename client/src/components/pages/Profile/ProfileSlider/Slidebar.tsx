import React from 'react'
import { inject, observer } from 'mobx-react'
import { IStoreProps } from '../../../../types';

const Slidebar = inject('usersStore')(observer(({ usersStore }: IStoreProps) => {

    return (
        <div className="slider">
            <div className={`bar pos-${usersStore.activeTab}`}></div>
        </div>
    )
}));

export default Slidebar

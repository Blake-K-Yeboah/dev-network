import React from 'react'
import { inject, observer } from 'mobx-react';
import { IStoreProps } from '../../../../types';

const Previous = inject('usersStore')(observer(({ usersStore }: IStoreProps) => {
    return (
        <button className={`circle-btn previous ${usersStore.users && !usersStore.users[usersStore.activeUserIndex - 1] ? 'disabled' : ''}`} onClick={() => { usersStore.prevUser() }}>
            <span className="icon">&lt;</span>
        </button>
    )
}))

export default Previous;

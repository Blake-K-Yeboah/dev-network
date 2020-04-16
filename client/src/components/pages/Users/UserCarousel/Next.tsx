import React from 'react'
import { inject, observer } from 'mobx-react';
import { IStoreProps } from '../../../../types';

const Next = inject('usersStore')(observer(({ usersStore }: IStoreProps) => {
    return (
        <button className={`circle-btn next ${usersStore.users && !usersStore.users[usersStore.activeUserIndex + 1] ? 'disabled' : ''}`} onClick={() => { usersStore.nextUser() }}>
            <span className="icon">&gt;</span>
        </button>
    )
}));

export default Next;

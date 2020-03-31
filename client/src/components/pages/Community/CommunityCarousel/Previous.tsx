import React from 'react'
import { inject, observer } from 'mobx-react';
import { IStoreProps } from '../../../../types';

const Previous = inject('communityStore')(observer(({ communityStore }: IStoreProps) => {
    return (
        <button className={`circle-btn next ${communityStore.posts && !communityStore.posts[communityStore.activePostIndex - 1] ? 'disabled' : ''}`} onClick={communityStore.prevPost}>
            <span className="icon">&lt;</span>
        </button>
    )
}));

export default Previous;

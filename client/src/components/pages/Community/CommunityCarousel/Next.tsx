import React from 'react'
import { inject, observer } from 'mobx-react';
import { IStoreProps } from '../../../../types';

const Next = inject('communityStore')(observer(({ communityStore }: IStoreProps) => {
    return (
        <button className={`circle-btn next ${communityStore.posts && !communityStore.posts[communityStore.activePostIndex + 1] ? 'disabled' : ''}`} onClick={communityStore.nextPost}>
            <span className="icon">&gt;</span>
        </button>
    )
}));

export default Next;

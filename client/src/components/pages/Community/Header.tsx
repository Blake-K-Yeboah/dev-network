import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react';
import { IStoreProps } from '../../../types';
import CommunityCarousel from './CommunityCarousel/CommunityCarousel';

const Header = inject('communityStore')(observer(({ communityStore }: IStoreProps) => {

    useEffect(() => {
        communityStore.fetchPosts();
    }, [communityStore]);

    return (
        <div className="header community">

            <h1 className="title">Explore Posts</h1>

            <CommunityCarousel />

        </div>
    )
}))

export default Header;

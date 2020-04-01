import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react';
import { IStoreProps } from '../../../types';
import CommunityCarousel from './CommunityCarousel/CommunityCarousel';

const Header = inject('communityStore', 'usersStore')(observer(({ communityStore, usersStore }: IStoreProps) => {

    useEffect(() => {
        communityStore.fetchPosts();
        usersStore.fetchUsers();
    }, [communityStore, usersStore]);

    return (
        <div className="header community">

            <h1 className="title">Explore Posts</h1>

            <CommunityCarousel />

        </div>
    )
}))

export default Header;

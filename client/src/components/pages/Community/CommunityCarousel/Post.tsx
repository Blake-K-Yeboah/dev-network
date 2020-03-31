import React from 'react'
import { inject, observer } from 'mobx-react'
import Spinner from '../../../Spinner';
import { Iuser, IStoreProps, IPost } from '../../../../types';

const Post = inject('communityStore', 'usersStore')(observer(({ communityStore, usersStore }: IStoreProps) => {

    const post: IPost | null = communityStore.projects ? communityStore.projects[communityStore.activePostIndex] : null;

    const postedBy: Iuser | null = post && usersStore.users ? usersStore.users.filter((user: Iuser) => user._id === post.postedBy)[0] : null;

    return (
        <>
            {post ? 'Post' : <Spinner />}
        </>
    )

}));

export default Post;

import React from 'react'
import { inject, observer } from 'mobx-react'
import Spinner from '../../../Spinner';
import { Iuser, IStoreProps, IPost } from '../../../../types';
import { NavLink } from 'react-router-dom';

const Post = inject('communityStore', 'usersStore')(observer(({ communityStore, usersStore }: IStoreProps) => {

    const post: IPost | null = communityStore.posts ? communityStore.posts[communityStore.activePostIndex] : null;

    const postedBy: Iuser | null = post && usersStore.users ? usersStore.users.filter((user: Iuser) => user._id === post.postedBy)[0] : null;

    const emojis: string[] = ['😀', '😎', '👌', '👍', '👑', '👨🏼‍💻', '🌊', '🌈', '🔥', '✨', '🏅'];

    const randomNumber: number = Math.floor(Math.random() * 10);
    
    const randomEmoji: string = emojis[randomNumber];
    
    return (
        <>
            {post ? <div className="post">
                <span className="post-emoji" role="img" aria-label="emoji">{randomEmoji}</span>
                <h1 className="post-title">{post.title}</h1>
                <p className="post-content">{post.content}</p>
                <div className="post-footer">
                    <p className="footer-text">Posted By <NavLink to={`/profile/${postedBy ? postedBy.username.replace('@', '') : null}`} className="profile-link">{postedBy ? postedBy.username : 'Loading'}</NavLink></p>
                </div>
                </div>
                 : <Spinner />}
        </>
    )

}));

export default Post;

import React from 'react'
import { inject, observer } from 'mobx-react'
import Spinner from '../../../Spinner';
import { Iuser, IStoreProps, IPost } from '../../../../types';
import { NavLink } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';
import Axios from 'axios';

const Post = inject('communityStore', 'usersStore', 'authStore')(observer(({ communityStore, usersStore, authStore }: IStoreProps) => {

    const post: IPost | null = communityStore.posts ? communityStore.posts[communityStore.activePostIndex] : null;

    const postedBy: Iuser | null = post && usersStore.users ? usersStore.users.filter((user: Iuser) => user._id === post.postedBy)[0] : null;

    const deletePost = () => {

        // Confirmation
        const confirmation = window.confirm(`Are you sure you want to delete ${post ? post.title : null}`);

        if (confirmation) {

            // Make Delete Request
            Axios.delete(`/api/community/${post ? post._id : null}`).then(res => {

                // Alert Success
                alert('Successfully Deleted');

                // Fetch Posts
                communityStore.fetchPosts();

                // Reload
                window.location.reload();

            }).catch(err => console.error(err));
        }
    }

    const delIcon = <span className="post-delete-icon" title="Delete Post" onClick={deletePost}> <FaRegTrashAlt /> </span>

    return (
        <>
            {post ? <div className="post">
                <span className="post-emoji" role="img" aria-label="emoji">{post.emoji}</span>
                <h1 className="post-title">{post.title}</h1>
                <p className="post-content">{post.content}</p>
                <div className="post-footer">
                    <p className="footer-text">Posted By <NavLink to={`/profile/${postedBy ? postedBy.username.replace('@', '') : null}`} className="profile-link">{postedBy ? postedBy.username : 'Loading'}</NavLink></p>
                    {postedBy && postedBy._id === authStore.user.id ? delIcon : ''}
                </div>
            </div>
                : <Spinner />}
        </>
    )

}));

export default Post;

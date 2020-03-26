import React from 'react'
import { observer, inject } from 'mobx-react'
import { IoIosCode, IoMdEye, IoMdThumbsDown, IoMdThumbsUp } from 'react-icons/io';
import Axios from 'axios';
import { IStoreProps } from '../../../../../types';

const ProfileProject = inject("authStore", "projectStore")(observer(({ authStore, project, projectStore }: IStoreProps) => {

    const likeCheck = project ? project.likes.includes(authStore.user.id) : false;

    const dislikeCheck = project ? project.dislikes.includes(authStore.user.id) : false;

    const likeHandler = (): void => {
        Axios.post(`/api/projects/${project ? project._id : null}/${likeCheck ? 'unlike' : 'like'}`, { uid: authStore.user.id })
            .then(res => {
                // Update Project
                projectStore.fetchProjects();
            }).catch(err => console.error(err));
    }

    const dislikeHandler = (): void => {
        Axios.post(`/api/projects/${project ? project._id : null}/${dislikeCheck ? 'undislike' : 'dislike'}`, { uid: authStore.user.id })
            .then(res => {
                // Update Project
                projectStore.fetchProjects();
            }).catch(err => console.error(err));

    }

    return (
        <div className="profile-project">
            <img className="project-image" src={`/uploads/projects/${project.img}`} alt={`${project.title}'s Screenshot`} />
            <div className="content">
                <h1 className="project-title">{project.title}</h1>
                <p className="project-desc">{project.description}</p>
                <div className="icon-group">
                    {project.github ? <a href={project.github} title="Github"><IoIosCode className="icon" /></a> : <IoIosCode className="icon disabled" />}
                    {project.preview ? <a href={project.preview} title="Preview"><IoMdEye className="icon" /></a> : <IoMdEye className="icon disabled" />}
                    <IoMdThumbsUp className={`icon ${likeCheck ? 'active' : ''}`} onClick={likeHandler} />
                    <IoMdThumbsDown className={`icon ${dislikeCheck ? 'dislike-active' : ''}`} onClick={dislikeHandler} />
                </div>
            </div>
        </div>
    )
}))

export default ProfileProject

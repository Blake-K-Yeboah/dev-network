import React from 'react'
import { inject, observer } from 'mobx-react'
import Spinner from '../../../Spinner';
import { IProject, Iuser, IStoreProps } from '../../../../types';
import { IoIosCode, IoMdEye, IoMdThumbsDown, IoMdThumbsUp } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import { FaRegTrashAlt } from 'react-icons/fa';

const Project = inject('projectStore', 'authStore', 'usersStore')(observer(({ projectStore, authStore, usersStore }: IStoreProps) => {

    const project: IProject | null = projectStore.projects ? projectStore.projects[projectStore.activeProjectIndex] : null;

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

    const postedBy = project && usersStore.users ? usersStore.users.filter((user: Iuser) => user._id === project.userId)[0] : null;

    const deleteProject = () => {

        // Confirmation
        const confirmation = window.confirm(`Are you sure you want to delete ${project ? project.title : null}`);

        if (confirmation) {

            Axios.delete(`/api/projects/${project ? project._id : null}`).then(res => {

                // Alert Success
                alert('Succesfully Deleted');

                // Fetch Projects Again
                projectStore.fetchProjects();

                // ReLoad
                window.location.reload();

            });

        }
    }

    const delIcon = <span className="project-delete-icon" title="Delete Project" onClick={deleteProject}> <FaRegTrashAlt /> </span>

    return (
        <>
            {project ? <div className="project">
                <img className="project-img" alt={project.title} src={`${process.env.PUBLIC_URL}/uploads/projects/${project.img}`} />
                <h2 className="project-title">{project.title}</h2>
                <p className="project-desc">{project.description}</p>
                <ul className="project-tags">
                    {project.tags ? project.tags.map((tag: string) => {
                        return <li className="tag" key={tag} >{tag}</li>
                    }) : <p className="no-tags">No Tags</p>}
                </ul>
                <div className="icons-container">
                    <div className="icon-group left">
                        {project.github ? <a href={project.github} title="Github"><IoIosCode className="icon" /></a> : <IoIosCode className="icon disabled" />}
                        {project.preview ? <a href={project.preview} title="Preview"><IoMdEye className="icon" /></a> : <IoMdEye className="icon disabled" />}
                    </div>
                    <div className="icon-group right">
                        <IoMdThumbsUp className={`icon ${likeCheck ? 'active' : ''}`} onClick={likeHandler} />
                        <IoMdThumbsDown className={`icon ${dislikeCheck ? 'dislike-active' : ''}`} onClick={dislikeHandler} />
                    </div>
                </div>
                <div className="project-footer">
                    <p className="footer-text">Posted By <NavLink to={`/profile/${postedBy ? postedBy.username.replace('@', '') : 'Loading'}`} className="profile-link">{postedBy ? postedBy.username : 'Loading'}</NavLink></p>
                    {postedBy && postedBy._id === authStore.user.id ? delIcon : ''}
                </div>
            </div> : <Spinner />}
        </>
    )

}));

export default Project;

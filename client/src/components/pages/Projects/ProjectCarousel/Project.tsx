import React from 'react'
import { inject, observer } from 'mobx-react'
import Spinner from '../../../Spinner';
import { IProject } from '../../../../types';
import { IoIosCode, IoMdEye, IoMdThumbsDown, IoMdThumbsUp } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Project = inject('projectStore', 'authStore')(observer(({ projectStore, authStore }) => {

    const project: IProject | null = projectStore.projects ? projectStore.projects[projectStore.activeProjectIndex] : null;

    return (
        <>
            {project ? <div className="project">
                <img className="project-img" alt={project.title} src={`./uploads/projects/${project.img}`} />
                <h2 className="project-title">{project.title}</h2>
                <p className="project-desc">{project.description}</p>
                <ul className="project-tags">
                    {project.tags ? project.tags.map((tag: string) => {
                        return <li className="tag">{tag}</li>
                    }) : <p className="no-tags">No Tags</p>}
                </ul>
                <div className="icons-container">
                    <div className="icon-group left">
                        {project.github ? <a href={project.github} title="Github"><IoIosCode className="icon" /></a> : <IoIosCode className="icon disabled" />}
                        {project.preview ? <a href={project.preview} title="Preview"><IoMdEye className="icon" /></a> : <IoMdEye className="icon disabled" />}
                    </div>
                    <div className="icon-group right">
                        <IoMdThumbsUp className={`icon ${project.likes.includes(authStore.user.id) ? 'active' : ''}`} />
                        <IoMdThumbsDown className={`icon ${project.dislikes.includes(authStore.user.id) ? 'active' : ''}`} />
                    </div>
                </div>
                <div className="project-footer">
                    <p className="footer-text">Posted By <NavLink to={`/profile/`} className="profile-link">{/* Add Name */}Blake Yeboah</NavLink></p>
                </div>
            </div> : <Spinner />}
        </>
    )

}));

export default Project;

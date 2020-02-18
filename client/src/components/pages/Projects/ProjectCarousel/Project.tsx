import React from 'react'
import { inject, observer } from 'mobx-react'
import Spinner from '../../../Spinner';
import { IProject } from '../../../../types';

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
            </div> : <Spinner />}
        </>
    )

}));

export default Project;

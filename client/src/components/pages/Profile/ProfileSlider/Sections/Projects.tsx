import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { IProject } from '../../../../../types';
import Spinner from '../../../../Spinner';

const Projects = inject('usersStore', 'projectStore', 'authStore')(observer(({ usersStore, projectStore, authStore, profile }) => {

    useEffect(() => {
        projectStore.fetchProjects();
    }, [projectStore]);

    const projects = projectStore.projects ? projectStore.projects.filter((project: IProject) => project.userId === profile._id) : null;

    return (
        <div className={`project-section ${usersStore.activeTab !== 'project' ? 'hidden' : ''}`}>
            {projects ? projects.map((project: IProject) => {
                return <h1>{project.title}</h1>
            }) : <Spinner />}
        </div>
    )
}));

export default Projects

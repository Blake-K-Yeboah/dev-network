import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import { IProject } from '../../../../../types';
import Spinner from '../../../../Spinner';
import ProfileProject from './ProfileProject';

const Projects = inject('usersStore', 'projectStore', 'authStore')(observer(({ usersStore, projectStore, authStore, profile }) => {

    useEffect(() => {
        projectStore.fetchProjects();
    }, [projectStore]);

    const projects = projectStore.projects ? projectStore.projects.filter((project: IProject) => project.userId === profile._id) : null;

    const [activeProject, setActiveProject] = useState(0);
    return (
        <div className={`project-section ${usersStore.activeTab !== 'project' ? 'hidden' : ''}`}>
            <button className={`small-circle-btn previous ${projects && !projects[activeProject - 1] ? 'disabled' : ''}`} onClick={() => setActiveProject(activeProject - 1)}>
                <span className="icon">
                    &lt;
                </span>
            </button>

            {projects && projects.length > 0 ? <ProfileProject project={projects[activeProject]} />
                : projects && projects.length < 1 ? <p className="no-projects">This user has no projects.</p>
                    : <Spinner />}

            <button className={`small-circle-btn next ${projects && !projects[activeProject + 1] ? 'disabled' : ''}`} onClick={() => setActiveProject(activeProject + 1)}>
                <span className="icon">
                    &gt;
                </span>
            </button>
        </div>
    )
}));

export default Projects

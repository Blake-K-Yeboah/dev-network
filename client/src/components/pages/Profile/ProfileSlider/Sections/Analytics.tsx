import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import AnalyticBox from './AnalyticBox'
import { IProject, IStoreProps } from '../../../../../types';

const Analytics = inject('usersStore', 'projectStore')(observer(({ usersStore, profile, projectStore }: IStoreProps) => {

    useEffect(() => {
        usersStore.fetchUsers();
        projectStore.fetchProjects();
    }, [usersStore, projectStore]);

    const usersProjects = projectStore.projects ? projectStore.projects.filter((project: IProject) => project.userId === profile._id) : null;

    const totalLikes: number | null = usersProjects ? usersProjects.reduce((total: number, project: IProject) => total += project.likes.length, 0) : null;

    const totalDislikes: number | null = usersProjects ? usersProjects.reduce((total: number, project: IProject) => total += project.dislikes.length, 0) : null;

    const stats = [
        {
            title: 'Likes',
            value: totalLikes ? totalLikes : '...'
        },
        {
            title: 'Dislikes',
            value: totalDislikes ? totalDislikes : '...'
        },
        {
            title: 'Projects',
            value: usersProjects ? usersProjects.length : '...'
        },
        {
            title: 'Followers',
            value: profile.followers.length
        }
    ]

    return (
        <div className={`analytics ${usersStore.activeTab !== "stats" ? 'hidden' : ''}`}>
            <div className="grid">
                {stats.map(stat => (
                    <AnalyticBox title={stat.title} value={stat.value} key={stat.title} />
                ))}
            </div>
        </div>
    )
}))

export default Analytics
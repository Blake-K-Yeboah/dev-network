import { observable, action } from 'mobx';
import { IProject, IProjectStore } from '../types';
import Axios from 'axios';

export class projectstore {

    @action
    async fetchProjects() {
        await Axios.get('/api/projects').then(res => {
            this.projects = res.data.reverse();
        }).catch(err => console.error(err));
    }

    @observable projects: IProject[] | null = null;

    @observable activeProjectIndex: number = 0;

    @action nextProject(): void {
        projectStore.activeProjectIndex += 1;
    }

    @action prevProject(): void {
        projectStore.activeProjectIndex -= 1;
    }

    @observable modalStatus: boolean = false;

    @action toggleStatus = (): void => {
        this.modalStatus = !this.modalStatus;
    }

    // Store Error
    @observable error: string | null = null;

    // Action to change error
    @action
    setError(err: string): void {
        this.error = err;
    }
}

export const projectStore: IProjectStore = new projectstore();
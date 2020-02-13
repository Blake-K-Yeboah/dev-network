import { observable, action } from 'mobx';
import { IProject } from '../types';
import Axios from 'axios';

class projectstore {

    @action
    fetchProjects() {
        Axios.get('/api/projects').then(res => {
            this.projects = res.data;
        }).catch(err => console.error(err));
    }

    @observable projects: IProject[] | null = null;

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

export const projectStore = new projectstore();
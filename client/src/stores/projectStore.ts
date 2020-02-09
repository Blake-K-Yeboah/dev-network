import { observable, action } from 'mobx';
import { IProject } from '../types';

class projectstore {

    @action
    fetchProjects() {
        // Fetch Projects
    }

    @observable projects: IProject[] | null = null;

    @observable modalStatus: boolean = false;

    @action toggleStatus = (): void => {
        this.modalStatus = !this.modalStatus;
    }
}

export const projectStore = new projectstore();
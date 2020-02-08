import { observable, action } from 'mobx';
import { IProject } from '../types';

class projectstore {

    @action
    fetchProjects() {
        // Fetch Projects
    }

    @observable projects: IProject[] | null = null;
}

export const projectStore = new projectstore();
import { projectstore } from '../stores/projectStore';

describe('ProjectStore', () => {

    it('fetchProjects updated projects observable', () => {

        const store = new projectstore();

        store.fetchProjects();

        setTimeout(() => {
            expect(store.projects).not.toBeNull();
        }, 2000);

    });

    it('.nextProject adds 1 to activeProjectIndex', () => {

        const store = new projectstore();

        store.nextProject();

        expect(store.activeProjectIndex).toBe(1);

    });

    it('.prevProject subtracts 1 from activeProjectIndex', () => {

        const store = new projectstore();

        store.prevProject();

        expect(store.activeProjectIndex).toBe(-1);

    });

    it('.toggleSearchModalStatus toggles search modal status obserbable', () => {

        const store = new projectstore();

        expect(store.modalStatus).toBeFalsy();

        store.toggleStatus();

        expect(store.modalStatus).toBeTruthy();

    });

});
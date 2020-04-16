import { usersstore } from '../stores/usersStore';

describe('UsersStore', () => {

    it('fetchUsers updated users observable', () => {

        const store = new usersstore();

        store.fetchUsers();

        setTimeout(() => {
            expect(store.users).not.toBeNull();
        }, 2000);

    });

    it('.nextUser adds 1 to activeUserIndex', () => {

        const store = new usersstore();

        store.nextUser();

        expect(store.activeUserIndex).toBe(1);

    });

    it('.prevUser subtracts 1 from activeUserIndex', () => {

        const store = new usersstore();

        store.prevUser();

        expect(store.activeUserIndex).toBe(-1);

    });

    it('.toggleSearchModalStatus toggles search modal status obserbable', () => {

        const store = new usersstore();

        expect(store.searchModalStatus).toBeFalsy();

        store.toggleSearchModalStatus();

        expect(store.searchModalStatus).toBeTruthy();

    });

});
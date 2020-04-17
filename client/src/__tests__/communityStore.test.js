import { communitystore } from '../stores/communityStore';

describe('CommunityStore', () => {

    it('fetchPosts updated posts observable', () => {

        const store = new communitystore();

        store.fetchPosts();

        setTimeout(() => {
            expect(store.posts).not.toBeNull();
        }, 2000);

    });

    it('.nextPost adds 1 to activePostIndex', () => {

        const store = new communitystore();

        store.nextPost();

        expect(store.activePostIndex).toBe(1);

    });

    it('.prevPost subtracts 1 from activePostIndex', () => {

        const store = new communitystore();

        store.prevPost();

        expect(store.activePostIndex).toBe(-1);

    });

    it('.toggleSearchModalStatus toggles search modal status obserbable', () => {

        const store = new communitystore();

        expect(store.modalStatus).toBeFalsy();

        store.toggleStatus();

        expect(store.modalStatus).toBeTruthy();

    });

});
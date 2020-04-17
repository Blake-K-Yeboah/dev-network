import { messagestore } from '../stores/messageStore';

describe('MessageStore', () => {

    it('fetchMessages fetches message from api and sets them to messages observable', () => {

        const store = new messagestore();

        store.fetchMessages();

        setTimeout(() => {

            expect(store.messages).not.toBeNull();

        }, 2000);

    });

    it('.toggleStatus toggles modal status', () => {

        const store = new messagestore();

        expect(store.modalStatus).toBeFalsy();

        store.toggleStatus();

        expect(store.modalStatus).toBeTruthy();

    });

    it('.setError sets an error correctly', () => {

        const store = new messagestore();

        const error = 'This is an error';

        store.setError(error);

        expect(store.error).toBe(error);

    });

    it('.setActiveFollower sets active follower correctly', () => {

        const store = new messagestore();

        const follower = 'randomfollowerid';

        store.setActiveFollower(follower);

        expect(store.activeFollower).toBe(follower);

    });

    it('.pushMessage pushes a new message to messages observable', () => {

        const store = new messagestore();

        const message = {

        }

        store.fetchMessages();

        setTimeout(() => {

            store.pushMessage(message);

            const testBool = store.messages.includes(message);

            expect(testBool).toBeTruthy();

        }, 2000)

    });

})

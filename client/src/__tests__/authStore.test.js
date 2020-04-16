import { authstore } from '../stores/authStore';

describe('AuthStore', () => {

    it('.setToken sets a token correctly', () => {

        const store = new authstore();

        const token = 'exampletoken'

        store.setToken(token);

        expect(store.token).toBe(token);

    });

    it('decodes token to get user', () => {

        const store = new authstore();

        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMzYzNzY2OTNkNDAyMDNhMGVhOTk2NiIsImZpcnN0bmFtZSI6IkJsYWtlIiwibGFzdG5hbWUiOiJLIFllYm9haCIsInVzZXJuYW1lIjoiQGJsYWtleWVib2FoIiwiZW1haWwiOiJibGFrZWt5ZWJvYWhAZ21haWwuY29tIiwicHJvZmlsZUljb24iOiJ1bmRlZmluZWQucG5nIiwiaGVhZGVySW1nIjoidW5kZWZpbmVkLmpwZyIsIm1lc3NhZ2VHcm91cHMiOltdLCJmb2xsb3dlcnMiOlsiNWU1NzYwNmJiMzdmOGMxOWIwNmU2ZTM5IiwiNWU5NWI4NjkwOTFjNWUyYTMwNGI5OWUwIl0sImlhdCI6MTU4Njg3MjE2MSwiZXhwIjoxNjE4NDI5MDg3fQ.HxsAfQZYbg-RLl9AdlxwUMWeg5Ua6ibNb2c1uCRywfk';

        store.setToken(token);

        // Wait a second to allow jwt_decode to take effect
        setTimeout(() => {
            expect(store.user).not.toBeNull();
        }, 1000);


    });

    it('adjusts isAuthenticated value if user is present', () => {
        const store = new authstore();

        expect(store.isAuthenticated).toBeFalsy();

        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMzYzNzY2OTNkNDAyMDNhMGVhOTk2NiIsImZpcnN0bmFtZSI6IkJsYWtlIiwibGFzdG5hbWUiOiJLIFllYm9haCIsInVzZXJuYW1lIjoiQGJsYWtleWVib2FoIiwiZW1haWwiOiJibGFrZWt5ZWJvYWhAZ21haWwuY29tIiwicHJvZmlsZUljb24iOiJ1bmRlZmluZWQucG5nIiwiaGVhZGVySW1nIjoidW5kZWZpbmVkLmpwZyIsIm1lc3NhZ2VHcm91cHMiOltdLCJmb2xsb3dlcnMiOlsiNWU1NzYwNmJiMzdmOGMxOWIwNmU2ZTM5IiwiNWU5NWI4NjkwOTFjNWUyYTMwNGI5OWUwIl0sImlhdCI6MTU4Njg3MjE2MSwiZXhwIjoxNjE4NDI5MDg3fQ.HxsAfQZYbg-RLl9AdlxwUMWeg5Ua6ibNb2c1uCRywfk';

        store.setToken(token);

        // Wait a second to allow jwt_decode to take effect
        setTimeout(() => {
            expect(store.isAuthenticated).toBeTruthy();
        }, 1000);

    });


    it('.setError sets an error correctly', () => {

        const store = new authstore();

        const error = 'THis is an error';

        store.setError(error);

        expect(store.error).toBe(error);

    });

});
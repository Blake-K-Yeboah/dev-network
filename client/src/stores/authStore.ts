import { observable, action } from 'mobx';

// Import JWT decode to decode jwt token
import jwt_decode from 'jwt-decode';

class authstore {

    // Store JWT Token
    @observable token = localStorage.getItem('jwtToken');

    // Store authenticated boolean
    @observable isAuthenticated = this.token ? true : false;

    // Store Logged in User
    @observable user = this.token ? jwt_decode(this.token) : null;

    // Store Error
    @observable error: string | null = null;

    // Action to change error
    @action
    setError(err: string) {
        this.error = err;
    }

}

export const authStore = new authstore();
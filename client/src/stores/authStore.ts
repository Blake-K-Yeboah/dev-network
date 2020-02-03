import { observable, action } from 'mobx';

// Import JWT decode to decode jwt token
import jwt_decode from 'jwt-decode';

import { Iuser } from '../types';

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

    // Action to set current user
    @action
    setCurrentUser(user: Iuser) {
        this.user = user;
    }

    // Action to set token
    @action
    setToken(token: string) {
        this.token = token;
    }

}

export const authStore = new authstore();
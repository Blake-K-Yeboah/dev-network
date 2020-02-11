import { observable, action } from 'mobx';

// Import JWT decode to decode jwt token
import jwt_decode from 'jwt-decode';

import { Iuser } from '../types';

class authstore {

    // Store JWT Token
    @observable token: string = document.cookie.split('=')[1];

    // Store authenticated boolean
    @observable isAuthenticated: boolean = this.token ? true : false;

    // Store Logged in User
    @observable user: Iuser | null = this.token ? jwt_decode(this.token) : null;

    // Store Error
    @observable error: string | null = null;

    // Action to change error
    @action
    setError(err: string): void {
        this.error = err;
    }

    // Action to set current user
    @action
    setCurrentUser(user: Iuser | null): void {
        this.user = user;
        if (user === null) this.isAuthenticated = false;
    }

    // Action to set token
    @action
    setToken(token: string): void {
        this.token = token;
        this.isAuthenticated = true;
    }

}

export const authStore = new authstore();
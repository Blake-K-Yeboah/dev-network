import { action, observable } from 'mobx';
import Axios from 'axios';
import { Iuser } from '../types';

class usersstore {

    @action fetchUsers() {
        Axios.get('/api/users').then(res => this.users = res.data.reverse());
    }

    @observable users: Iuser[] | null = null;

    @observable activeUserIndex: number = 0;

    @action nextUser(): void {
        usersStore.activeUserIndex += 1;
    }

    @action prevUser(): void {
        usersStore.activeUserIndex -= 1;
    }

}

export const usersStore = new usersstore();
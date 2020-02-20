import { action, observable } from 'mobx';
import Axios from 'axios';
import { Iuser } from '../types';

class usersstore {

    @action fetchUsers() {
        Axios.get('/api/users').then(res => this.users = res.data);
    }

    @observable users: Iuser[] | null = null;

}

export const usersStore = new usersstore();
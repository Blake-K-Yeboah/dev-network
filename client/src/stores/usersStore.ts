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

    @observable searchModalStatus: boolean = false;

    @action toggleSearchModalStatus(): void {
        this.searchModalStatus = !this.searchModalStatus;
    }

    @observable searchQuery: string = '';

    @action setSearchQuery = (newQuery: string): void => {
        this.searchQuery = newQuery;
    }

}

export const usersStore = new usersstore();
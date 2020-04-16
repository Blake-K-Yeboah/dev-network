import { action, observable } from 'mobx';
import Axios from 'axios';
import { Iuser, IUsersStore } from '../types';

export class usersstore {

    @action async fetchUsers() {
        await Axios.get('/api/users').then(res => this.users = res.data.reverse());
    }

    @observable users: Iuser[] | null = null;

    @observable activeUserIndex: number = 0;

    @action nextUser(): void {
        this.activeUserIndex += 1;
    }

    @action prevUser(): void {
        this.activeUserIndex -= 1;
    }

    @observable searchModalStatus: boolean = false;

    @action toggleSearchModalStatus(): void {
        this.searchModalStatus = !this.searchModalStatus;
    }

    @observable searchQuery: string = '';

    @action setSearchQuery = (newQuery: string): void => {
        this.searchQuery = newQuery;
    }

    @observable activeTab: string = 'project';

    @action setActiveTab = (newTab: string): void => {
        this.activeTab = newTab;
    }
}

export const usersStore: IUsersStore = new usersstore();
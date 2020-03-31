import { observable, action } from 'mobx';
import Axios from 'axios';
import { IPost, ICommunityStore } from '../types';

class communitystore {

    @action
    fetchPosts() {
        Axios.get('/api/community').then(res => {
            this.posts = res.data.reverse();
        }).catch(err => console.error(err));
    }

    @observable posts: IPost[] | null = null;

    @observable activePostIndex: number = 0;

    @action nextPost(): void {
        communityStore.activePostIndex += 1;
    }

    @action prevPost(): void {
        communityStore.activePostIndex -= 1;
    }

    @observable modalStatus: boolean = false;

    @action toggleStatus = (): void => {
        this.modalStatus = !this.modalStatus;
    }

    // Store Error
    @observable error: string | null = null;

    // Action to change error
    @action
    setError(err: string): void {
        this.error = err;
    }
}

export const communityStore: ICommunityStore = new communitystore();
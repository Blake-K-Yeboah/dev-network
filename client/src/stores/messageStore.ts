import { IMessageStore, IMessage } from "../types";
import { action, observable } from "mobx";
import Axios from 'axios';

export class messagestore {

    @action
    async fetchMessages() {
        await Axios.get('/api/messages').then(res => {
            this.messages = res.data;
        }).catch(err => console.log(err))
    }

    @observable messages: IMessage[] | null = null;

    @observable modalStatus = false;

    @action
    toggleStatus() {
        this.modalStatus = !this.modalStatus;
    }

    @observable error: string | null = null;

    @action
    setError(err: string) {
        this.error = err;
    }

    @observable activeFollower: string | null = null;

    @action
    setActiveFollower(follower: string) {
        this.activeFollower = follower;
    }

    @action
    pushMessage(message: IMessage) {
        if (this.messages) this.messages.push(message);
    }
}

export const messageStore: IMessageStore = new messagestore();
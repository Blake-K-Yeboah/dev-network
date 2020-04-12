import { IMessageStore, IMessage } from "../types";
import { action, observable } from "mobx";
import Axios from 'axios';

class messagestore {

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
}

export const messageStore: IMessageStore = new messagestore();
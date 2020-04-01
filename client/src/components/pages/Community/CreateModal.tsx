import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'
import Axios from 'axios';
import { IStoreProps } from '../../../types'

const CreateModal = inject('authStore', 'communityStore')(observer(({ authStore, communityStore }: IStoreProps) => {

    const [userInput, setUserInput] = useState({
        title: '',
        content: ''
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput({ ...userInput, [e.target.id]: e.target.value });
        if (e.target.value !== '') {
            if (e.target.previousElementSibling) {
                e.target.previousElementSibling.classList.add('valid');
                e.target.previousElementSibling.classList.remove('error');
            }
            e.target.classList.remove('error');
        } else {
            if (e.target.previousElementSibling) e.target.previousElementSibling.classList.remove('valid');
        }
    }

    const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.previousElementSibling) e.target.previousElementSibling.classList.add('focus');
    }

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.previousElementSibling) e.target.previousElementSibling.classList.remove('focus');
    }

    const addPost = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        let data = {
            ...userInput,
            postedBy: authStore.user.id
        }

        Axios.post('/api/community', data).then(res => {
            communityStore.toggleStatus();
            communityStore.fetchPosts();
        }).catch(err => {
            communityStore.setError(null);
            let errors = Object.entries(err.response.data);
            errors.forEach(error => {
                communityStore.setError({ ...communityStore.error, [error[0]]: error[1] });
            });
        })
    }

    return (
        <div className={`modal small ${!communityStore.modalStatus ? 'hidden' : ''}`}>
            <span className="close-icon" onClick={() => communityStore.toggleStatus()}>&times;</span>
            <h1 className="title">Create a Post</h1>
            <form className="modal-form" autoComplete="off" onSubmit={addPost}>
                <div className="form-group">
                    <div className="input-container">
                        <label htmlFor="title" className={`input-label ${userInput.title !== '' ? 'valid' : ''} ${communityStore.error && communityStore.error.title ? 'error' : ''}`}>Title</label>
                        <input type="text" className={`input ${communityStore.error && communityStore.error.title ? 'error' : ''}`} id="title" value={userInput.title} onBlur={onBlur} onFocus={onFocus} onChange={onChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-container">
                        <label htmlFor="content" className={`input-label ${userInput.content !== '' ? 'valid' : ''} ${communityStore.error && communityStore.error.content ? 'error' : ''}`}>Content</label>
                        <input type="text" className={`input large ${communityStore.error && communityStore.error.content ? 'error' : ''}`} id="content" value={userInput.content} onBlur={onBlur} onFocus={onFocus} onChange={onChange} />
                    </div>
                </div>
                <button type='submit' className="btn primary submit-btn">Post</button>
            </form>
        </div>
    )
}))

export default CreateModal

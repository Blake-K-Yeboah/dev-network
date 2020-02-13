import React, { useState } from 'react'
import { inject, observer } from 'mobx-react';
import Axios from 'axios';

const PostModal = inject('authStore', 'projectStore')(observer(({ authStore, projectStore }) => {

    // User Input State
    const [userInput, setUserInput] = useState({
        title: '',
        description: '',
        tags: '',
        preview: '',
        github: ''
    });

    const [file, setFile] = useState();

    // Input Event Handlers
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

    const fileChange = (files: FileList | null) => {

        setFile(files ? files[0] : null);

    }

    const postProject = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Define formData
        const formData = new FormData();

        // Append File on to formData
        formData.append('file', file);

        let data = {
            ...userInput,
            postedBy: authStore.user
        }

        Object.entries(data).forEach(entry => {
            formData.append(entry[0], entry[1]);
        });

        Axios.post('/api/projects', formData).then(res => {
            console.log(res.data);
            projectStore.fetchProjects();
        }).catch(err => {
            console.log(err);
            projectStore.setError(null);
            let errors = Object.entries(err);
            errors.forEach(error => {
                projectStore.setError({ ...projectStore.error, [error[0]]: error[1] });
            });
        })
    }

    return (
        <div className={`modal ${!projectStore.modalStatus ? 'hidden' : ''}`}>
            <span className="close-icon" onClick={() => projectStore.toggleStatus()}>&times;</span>
            <h1 className="title">Post A Project</h1>
            <form className="modal-form" autoComplete="off" onSubmit={postProject}>
                <div className="form-group">
                    <div className="input-container">
                        <label htmlFor="title" className={`input-label ${userInput.title !== '' ? 'valid' : ''}`}>Title</label>
                        <input type="text" className="input" id="title" value={userInput.title} onBlur={onBlur} onFocus={onFocus} onChange={onChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-container">
                        <label htmlFor="description" className={`input-label ${userInput.description !== '' ? 'valid' : ''}`}>Description</label>
                        <input type="text" className="input" id="description" value={userInput.description} onBlur={onBlur} onFocus={onFocus} onChange={onChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-container">
                        <label htmlFor="tags" className={`input-label ${userInput.tags !== '' ? 'valid' : ''}`}>Tags</label>
                        <input type="text" className="input" id="tags" value={userInput.tags} onBlur={onBlur} onFocus={onFocus} onChange={onChange} />
                    </div>
                </div>
                <div className="form-group form-grid">
                    <div className="input-container">
                        <label htmlFor="preview" className={`input-label ${userInput.preview !== '' ? 'valid' : ''}`}>Preview Link</label>
                        <input type="text" className="input" id="preview" value={userInput.preview} onBlur={onBlur} onFocus={onFocus} onChange={onChange} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="github" className={`input-label ${userInput.github !== '' ? 'valid' : ''}`}>Github Link</label>
                        <input type="text" className="input" id="github" value={userInput.github} onBlur={onBlur} onFocus={onFocus} onChange={onChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-container">

                        <label htmlFor="file">Project Image: </label>

                        <input type="file" id="file" onChange={e => fileChange(e.target.files)} style={{ marginLeft: 20 }} />

                    </div>
                </div>
                <button type='submit' className="btn primary submit-btn">Post Project</button>
            </form>
        </div>
    )
}))

export default PostModal

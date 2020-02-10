import React, { useState } from 'react'
import { inject, observer } from 'mobx-react';

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

    const [fileName, setFileName] = useState('Pick A File');

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

        let fileName = files ? files[0].name : 'Pick A File';

        setFileName(fileName);

        setFile(files ? files[0] : null);

    }

    return (
        <div className={`modal ${!projectStore.modalStatus ? 'hidden' : ''}`}>
            <span className="close-icon" onClick={() => projectStore.toggleStatus()}>&times;</span>
            <h1 className="title">Post A Project</h1>
            <form className="modal-form" autoComplete="off">
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
                        <label htmlFor="tags" className={`input-label ${userInput.tags !== '' ? 'valid' : ''}`}>Tags (Comma between each one)</label>
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

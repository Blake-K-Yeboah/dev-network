import React, { useState } from 'react';

import axios from 'axios';

import { FaEye } from 'react-icons/fa';

const RegisterForm = () => {

    // User Input State
    const [userInput, setUserInput] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
    });

    // Input Event Handlers
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput({ ...userInput, [e.target.id]: e.target.value });
        if (e.target.value !== '') {
            if (e.target.previousElementSibling) e.target.previousElementSibling.classList.add('valid');
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

    // Register Handler
    const registerHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (userInput.username !== '') userInput.username = `@${userInput.username}`;

        axios.post('/api/users/register', userInput).then(res => {
            console.log("Successfully registered!")
        }).catch(err => {
            console.log(err);
        })
    }

    // Password Ref 
    const passwordRef = React.useRef<HTMLInputElement>(null);

    // Show And Hide Password Functions
    const togglePasswordType = (el: HTMLInputElement | null, type: string) => {
        if (el) el.type = type;
    }

    const showPassword = () => {
        if (passwordRef !== null) {
            togglePasswordType(passwordRef.current, 'text');
        }
    }

    const hidePassword = () => {
        if (passwordRef !== null) {
            togglePasswordType(passwordRef.current, 'password');
        }
    }

    return (
        <div className="header register">
            <h1 className="title">Create an Account</h1>
            <form className="form" onSubmit={registerHandler}>
                <div className="form-group form-grid">
                    <div className="input-container">
                        <label htmlFor="firstname" className="input-label">First Name</label>
                        <input type="text" className="input" id="firstname" onChange={onChange} value={userInput.firstname} onBlur={onBlur} onFocus={onFocus} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="lastname" className="input-label">Last Name</label>
                        <input type="text" className="input" id="lastname" onChange={onChange} value={userInput.lastname} onBlur={onBlur} onFocus={onFocus} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-container">
                        <label htmlFor="username" className="input-label">Username</label>
                        <input type="text" className='input' id="username" onChange={onChange} value={userInput.username} onBlur={onBlur} onFocus={onFocus} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-container">
                        <label htmlFor="email" className="input-label">Email</label>
                        <input type="text" className='input' id="email" onChange={onChange} value={userInput.email} onBlur={onBlur} onFocus={onFocus} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-container">
                        <label htmlFor="password" className="input-label">Password</label>
                        <input type="password" className='input' id="password" onChange={onChange} value={userInput.password} onBlur={onBlur} onFocus={onFocus} ref={passwordRef} />
                        <FaEye className="eyeIcon" onMouseDown={showPassword} onMouseUp={hidePassword}/>
                    </div>
                </div>
                <button type="submit" className="btn primary submit-btn">Create an Account</button>
            </form>
        </div>
    )
}

export default RegisterForm

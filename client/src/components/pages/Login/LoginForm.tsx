import React, { useState } from 'react';

import axios from 'axios';

import { FaEye } from 'react-icons/fa';
import { inject, observer } from 'mobx-react';

import { useHistory, NavLink } from 'react-router-dom';

import jwt_decode from 'jwt-decode';

import LoginError from './LoginError';
import LoginSuccess from './LoginSuccess';

const RegisterForm = inject('authStore')(observer(({ authStore }) => {

    // User Input State
    const [userInput, setUserInput] = useState({
        email: '',
        password: ''
    });

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

    let history = useHistory();

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

    // Handle Login
    const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios
            .post("/api/users/login", userInput)
            .then(res => {
                // Set token to localStorage
                const { token } = res.data;
                localStorage.setItem("jwtToken", token);
                authStore.setToken(token);

                // Set token to Auth header
                if (token) {
                    // Apply authorization token to every request if logged in
                    axios.defaults.headers.common["Authorization"] = token;
                } else {
                    // Delete auth header
                    delete axios.defaults.headers.common["Authorization"];
                }

                // Decode token to get user data
                const decoded = jwt_decode(token);

                // Set current user
                authStore.setCurrentUser(decoded);

                history.push('/');
            })
            .catch(err => {
                authStore.setError(null);
                let errors = Object.entries(err.response.data);
                errors.forEach(error => {
                    authStore.setError({ ...authStore.error, [error[0]]: error[1] });
                });
            });
    }

    let search = history.location.search;

    const error: string | null = search && search.split('=')[0] === '?error' ? search.split('=')[1] : null;

    const success: string | null = search && search.split('=')[0] === '?success' ? search.split('=')[1] : null;

    return (
        <div className="header">
            <h1 className="title">Login</h1>
            <form className="form" onSubmit={loginHandler}>
                {success ? <LoginSuccess /> : ''}
                {error ? <LoginError error={error} /> : ''}
                <div className="form-group">
                    <div className="input-container">
                        <label htmlFor="email" className={`input-label ${userInput.email !== '' ? 'valid' : ''} ${authStore.error && authStore.error.email ? 'error' : ''}`}>Email</label>
                        <input type="text" className={`input ${authStore.error && authStore.error.email ? 'error' : ''}`} id="email" onChange={onChange} value={userInput.email} onBlur={onBlur} onFocus={onFocus} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-container">
                        <label htmlFor="password" className={`input-label ${userInput.password !== '' ? 'valid' : ''} ${authStore.error && authStore.error.password ? 'error' : ''}`}>Password</label>
                        <input type="password" className={`input ${authStore.error && authStore.error.password ? 'error' : ''}`} id="password" onChange={onChange} value={userInput.password} onBlur={onBlur} onFocus={onFocus} ref={passwordRef} />
                        <FaEye className="eyeIcon" onMouseDown={showPassword} onMouseUp={hidePassword} />
                    </div>
                </div>
                <button type="submit" className="btn primary submit-btn">Login</button>
                <br /><br />
                <NavLink className='link' to="/register">New? Create an Account</NavLink>
            </form>
        </div>
    )
}));

export default RegisterForm

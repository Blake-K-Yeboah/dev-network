import React, { useState } from 'react'

const RegisterForm = () => {

    const [userInput, setUserInput] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    });

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

    return (
        <div className="header register">
            <h1 className="title">Create an Account</h1>
            <form className="form">
                <div className="form-group form-grid">
                    <div className="input-container">
                        <label htmlFor="firstName" className="input-label">First Name</label>
                        <input type="text" className="input" id="firstName" onChange={onChange} value={userInput.firstName} onBlur={onBlur} onFocus={onFocus} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="lastName" className="input-label">Last Name</label>
                        <input type="text" className="input" id="lastName" onChange={onChange} value={userInput.lastName} onBlur={onBlur} onFocus={onFocus} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-container">
                        <label htmlFor="username" className="input-label">@Username</label>
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
                        <input type="text" className='input' id="password" onChange={onChange} value={userInput.password} onBlur={onBlur} onFocus={onFocus} />
                    </div>
                </div>
                <button type="submit" className="btn primary submit-btn">Create an Account</button>
            </form>
        </div>
    )
}

export default RegisterForm

import React from 'react'
import { ILoginErrorProps } from '../../../types';

const LoginError = (props: ILoginErrorProps) => {
    return (
        <div className="error">
            <p className="error-text">{props.error === '1' ? 'You must be logged in to access that page.' : ''}</p>
        </div>
    )
}

export default LoginError

import React from 'react'
import Navbar from '../../layout/Navbar'
import LoginForm from './LoginForm';
import Footer from '../../layout/Footer';
import { Helmet } from 'react-helmet';

const Login = () => {
    return (
        <>
            <Helmet>

                <title>DevNetwork - Login</title>

            </Helmet>

            <Navbar />

            <div className='container'>

                <LoginForm />

                <Footer />

            </div>

        </>
    )
}

export default Login

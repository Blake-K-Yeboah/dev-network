import React from 'react'
import Navbar from '../../layout/Navbar'
import LoginForm from './LoginForm';
import Footer from '../../layout/Footer';

const Register: React.FC = () => {
    return (
        <>
            <Navbar />

            <div className='container'>

                <LoginForm />

                <Footer />

            </div>

        </>
    )
}

export default Register

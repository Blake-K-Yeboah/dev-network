import React from 'react'
import Navbar from '../../layout/Navbar'
import RegisterForm from './RegisterForm';
import Footer from '../../layout/Footer';
import { Helmet } from 'react-helmet';

const Register: React.FC = () => {
    return (
        <>
            <Helmet>

                <title>DevNetwork - Register</title>

            </Helmet>

            <Navbar />

            <div className='container'>

                <RegisterForm />

                <Footer />

            </div>

        </>
    )
}

export default Register

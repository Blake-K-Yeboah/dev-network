import React from 'react'
import Navbar from '../../layout/Navbar'
import RegisterForm from './RegisterForm';
import Footer from '../../layout/Footer';

const Register: React.FC = () => {
    return (
        <>
            <Navbar />

            <div className='container'>

                <RegisterForm />

                <Footer />

            </div>

        </>
    )
}

export default Register

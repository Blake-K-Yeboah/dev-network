import React from 'react'
import Navbar from '../../layout/Navbar'
import RegisterForm from './RegisterForm';
import Footer from '../../layout/Footer';
import { Helmet } from 'react-helmet';
import Container from '../../layout/Container';

const Register = () => {
    return (
        <>
            <Helmet>

                <title>DevNetwork - Register</title>

            </Helmet>

            <Navbar />

            <Container>

                <RegisterForm />

                <Footer />

            </Container>

        </>
    )
}

export default Register

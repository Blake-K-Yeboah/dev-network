import React from 'react'
import Navbar from '../../layout/Navbar'
import LoginForm from './LoginForm';
import Footer from '../../layout/Footer';
import { Helmet } from 'react-helmet';
import Container from '../../layout/Container';

const Login = () => {

    return (
        <>
            <Helmet>

                <title>DevNetwork - Login</title>

            </Helmet>

            <Navbar />

            <Container>

                <LoginForm />

                <Footer />

            </Container>

        </>
    )
}

export default Login

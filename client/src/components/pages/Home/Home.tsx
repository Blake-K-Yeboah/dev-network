import React from 'react';
import Navbar from '../../layout/Navbar'
import Header from './Header'
import Footer from '../../layout/Footer'
import { Helmet } from 'react-helmet';
import Container from '../../layout/Container';

const Home = () => {
    return (
        <>

            <Helmet>

                <title>DevNetwork - Home</title>

            </Helmet>

            <Navbar />

            <Container>

                <Header />

                <Footer />

            </Container>

        </>
    )
}

export default Home

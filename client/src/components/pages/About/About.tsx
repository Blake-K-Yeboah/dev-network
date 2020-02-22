import React from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import AboutContent from './AboutContent';
import { Helmet } from 'react-helmet';
import Container from '../../layout/Container';

const About = () => {
    return (
        <>

            <Helmet>

                <title>DevNetwork - About</title>

            </Helmet>

            <Navbar />

            <Container>

                <AboutContent />

                <Footer />

            </Container>

        </>
    )
}

export default About

import React from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import AboutContent from './AboutContent';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <>

            <Helmet>

                <title>DevNetwork - About</title>

            </Helmet>

            <Navbar />

            <div className="container">

                <AboutContent />

                <Footer />

            </div>

        </>
    )
}

export default About

import React from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import AboutContent from './AboutContent';

const About = () => {
    return (
        <>
            <Navbar />

            <div className="container">

                <AboutContent />

                <Footer />

            </div>

        </>
    )
}

export default About

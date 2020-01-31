import React from 'react';
import Navbar from '../../layout/Navbar'
import Header from './Header'
import Footer from '../../layout/Footer'
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>

            <Helmet>

                <title>DevNetwork - Home</title>

            </Helmet>

            <Navbar />

            <div className="container">

                <Header />

                <Footer />

            </div>

        </>
    )
}

export default Home

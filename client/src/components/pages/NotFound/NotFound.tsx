import React from 'react'
import Navbar from '../../layout/Navbar'
import Header from '../Home/Header'
import Footer from '../../layout/Footer'
import { Helmet } from 'react-helmet'

const Home = () => {
    return (
        <>

            <Helmet>

                <title>DevNetwork - 404</title>

            </Helmet>

            <Navbar />
            <div className="container">
                <Header page="notfound" />
                <Footer />
            </div>
        </>
    )
}

export default Home
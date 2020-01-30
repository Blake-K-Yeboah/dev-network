import React from 'react'
import Navbar from '../../layout/Navbar'
import Header from '../Home/Header'
import Footer from '../../layout/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Header page="notfound" />
                <Footer />
            </div>
        </>
    )
}

export default Home
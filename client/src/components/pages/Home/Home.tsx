import React from 'react'
import Navbar from '../../layout/Navbar'
import Header from './Header'
import Footer from '../../layout/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Header />
                <Footer />
            </div>
        </>
    )
}

export default Home

import React from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import { Helmet } from 'react-helmet'
import Container from '../../layout/Container'
import { IStoreProps } from '../../../types'
import Sidebar from '../Projects/Sidebar'

const Community = (props: IStoreProps) => {
    return (
        <>
            <Helmet>

                <title> DevNetwork - Community </title>

            </Helmet>

            <Navbar />

            <Container>

                <Sidebar />

                <Footer />

            </Container>
        </>
    )
}

export default Community
import React from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import { Helmet } from 'react-helmet'
import Container from '../../layout/Container'
import { IStoreProps } from '../../../types'
import ProjectsPopup from '../../popups/ProjectsPopup';
import Sidebar from '../Projects/Sidebar'
import Header from './Header'

const Community = (props: IStoreProps) => {
    return (
        <>
            <Helmet>

                <title> DevNetwork - Community </title>

            </Helmet>

            <ProjectsPopup />

            <Navbar />

            <Container>

                <Sidebar />

                <Header />

                <Footer />

            </Container>
        </>
    )
}

export default Community
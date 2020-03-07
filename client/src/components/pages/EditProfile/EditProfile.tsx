import React from 'react'
import { inject, observer } from 'mobx-react'
import Navbar from '../../layout/Navbar'
import Container from '../../layout/Container'
import Footer from '../../layout/Footer'
import Sidebar from '../Projects/Sidebar'
import EditHeader from './EditHeader'

const EditProfile = inject('authStore')(observer(({ authStore }) => {
    return (
        <>

            <Navbar />

            <Container>

                <Sidebar />

                <EditHeader />

                <Footer />

            </Container>
        </>
    )
}))

export default EditProfile

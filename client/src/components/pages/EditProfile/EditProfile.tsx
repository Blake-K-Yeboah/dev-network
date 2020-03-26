import React from 'react'
import { inject, observer } from 'mobx-react'
import Navbar from '../../layout/Navbar'
import Container from '../../layout/Container'
import Footer from '../../layout/Footer'
import Sidebar from '../Projects/Sidebar'
import EditHeader from './EditHeader'
import { Helmet } from 'react-helmet';
import { IAuthStore } from '../../../types';

interface Iprops {
    authStore?: IAuthStore,
}
const EditProfile = inject('authStore')(observer(({ authStore }: Iprops) => {

    return (
        <>

            <Helmet>

                <title>DevNetwork - Editing {authStore ? authStore.user.firstname : ''}'s Profile</title>

            </Helmet>

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

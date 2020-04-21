import React from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import { Helmet } from 'react-helmet'
import Container from '../../layout/Container'
import { IStoreProps } from '../../../types'
import ProjectsPopup from '../../popups/ProjectsPopup';
import Sidebar from '../Projects/Sidebar'
import Header from './Header'
import CreateModal from './CreateModal'
import { inject, observer } from 'mobx-react'
import MessageSection from '../../message/MessageSection';
import MessageModal from '../../message/MessageModal';

const Community = inject("communityStore")(observer(({ communityStore }: IStoreProps) => {
    return (
        <>
            <Helmet>

                <title> DevNetwork - Community </title>

            </Helmet>

            <ProjectsPopup />

            <Navbar />

            <Container>

                <Sidebar />

                <MessageSection />

                <Header />

                <Footer />

            </Container>

            <CreateModal />

            <MessageModal />

            <div className={`overlay ${!communityStore.modalStatus ? 'hidden' : ''}`} onClick={() => communityStore.toggleStatus()}></div>
        </>
    )
}))

export default Community
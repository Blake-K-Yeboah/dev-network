import React, { useEffect } from 'react';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import { inject, observer } from 'mobx-react';
import { Helmet } from 'react-helmet';
import Sidebar from './Sidebar';
import Header from './Header';
import PostModal from './PostModal';
import UsersPopup from '../../popups/UsersPopup';
import Container from '../../layout/Container';
import { IStoreProps } from '../../../types';
import MessageSection from '../../message/MessageSection';
import MessageModal from '../../message/MessageModal';

const Projects = inject("projectStore", "usersStore")(observer(({ projectStore, usersStore }: IStoreProps) => {

    useEffect(() => {
        projectStore.fetchProjects();
        usersStore.fetchUsers();
    }, [projectStore, usersStore]);

    return (
        <>
            <Helmet>

                <title>DevNetwork - Projects</title>

            </Helmet>

            <UsersPopup />

            <Navbar />

            <Container>

                <Header />

                <MessageSection />

                <Sidebar />

                <Footer />

            </Container>

            <PostModal />

            <MessageModal />

            <div className={`overlay ${!projectStore.modalStatus ? 'hidden' : ''}`} onClick={() => projectStore.toggleStatus()}></div>

        </>
    )
}))

export default Projects;

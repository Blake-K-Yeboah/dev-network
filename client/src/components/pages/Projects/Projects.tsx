import React, { useEffect } from 'react';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import { inject, observer } from 'mobx-react';
import { Helmet } from 'react-helmet';
import Sidebar from './Sidebar';
import Header from './Header';
import PostModal from './PostModal';
import UsersPopup from '../../popups/UsersPopup';

const Projects = inject("projectStore", "usersStore")(observer(({ projectStore, usersStore }) => {

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

            <div className="container">

                <Header />

                <Sidebar />

                <Footer />

            </div>

            <PostModal />

            <div className={`overlay ${!projectStore.modalStatus ? 'hidden' : ''}`} onClick={() => projectStore.toggleStatus()}></div>

        </>
    )
}))

export default Projects;

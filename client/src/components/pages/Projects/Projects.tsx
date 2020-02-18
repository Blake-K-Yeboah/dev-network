import React, { useEffect } from 'react';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import { inject, observer } from 'mobx-react';
import { Helmet } from 'react-helmet';
import Sidebar from './Sidebar';
import Header from './Header';
import PostModal from './PostModal';

const Projects = inject("projectStore")(observer(({ projectStore }) => {

    useEffect(() => {
        projectStore.fetchProjects();
    }, [projectStore]);

    return (
        <>
            <Helmet>

                <title>DevNetwork - Projects</title>

            </Helmet>

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

import React from 'react';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import { inject, observer } from 'mobx-react';
import { Helmet } from 'react-helmet';

const Projects = inject("authStore", "projectStore")(observer(({ authStore, projectStore }) => {

    return (
        <>
            <Helmet>

                <title>DevNetwork - Projects</title>

            </Helmet>

            <Navbar />

            <div className="container">

                <Footer />

            </div>
        </>
    )
}))

export default Projects;

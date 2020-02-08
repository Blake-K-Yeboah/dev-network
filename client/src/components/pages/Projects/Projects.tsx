import React from 'react'
import { inject, observer } from 'mobx-react';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';

const Projects = inject("authStore", "projectStore")(observer(({ authStore, projectStore }) => {

    return (
        <>
            <Navbar />

            <div className="container">

                <Footer />

            </div>
        </>
    )
}))

export default Projects;

import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react';
import Navbar from '../../layout/Navbar';
import Sidebar from '../Projects/Sidebar';
import Container from '../../layout/Container';
import Footer from '../../layout/Footer';

const Profile = inject("usersStore", "authStore", "projectStore")(observer(({ usersStore, authStore, projectStore, match }) => {

    useEffect(() => {

        usersStore.fetchUsers();

        projectStore.fetchProjects();

    }, [usersStore, projectStore]);

    return (
        <>

            <Navbar />

            <Container>

                <Sidebar />

                <Footer />

            </Container>
        </>
    )
}))

export default Profile;

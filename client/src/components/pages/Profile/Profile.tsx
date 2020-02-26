import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react';
import Navbar from '../../layout/Navbar';
import Sidebar from '../Projects/Sidebar';
import Container from '../../layout/Container';
import Footer from '../../layout/Footer';
import ProfileHeader from './ProfileHeader';
import { Iuser } from '../../../types';

const Profile = inject("usersStore", "projectStore")(observer(({ usersStore, projectStore, match }) => {

    useEffect(() => {

        usersStore.fetchUsers();

        projectStore.fetchProjects();

    }, [usersStore, projectStore]);

    const activeUser = usersStore.users ? usersStore.users.filter((user: Iuser) => user.username.replace('@', '') === match.params.username)[0] : null;

    return (
        <>

            <Navbar />

            <Container>

                <Sidebar />

                <ProfileHeader profile={activeUser} />

                <Footer />

            </Container>
        </>
    )
}))

export default Profile;

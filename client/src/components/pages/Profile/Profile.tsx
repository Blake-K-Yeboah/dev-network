import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react';
import { Helmet } from 'react-helmet';
import Navbar from '../../layout/Navbar';
import Sidebar from '../Projects/Sidebar';
import Container from '../../layout/Container';
import Footer from '../../layout/Footer';
import ProfileHeader from './ProfileHeader';
import { Iuser, IStoreProps } from '../../../types';

const Profile = inject("usersStore", "projectStore")(observer(({ usersStore, projectStore, match }: IStoreProps) => {

    useEffect(() => {

        usersStore.fetchUsers();

        projectStore.fetchProjects();

    }, [usersStore, projectStore]);

    const activeUser: Iuser | null = usersStore.users ? usersStore.users.filter((user: Iuser) => user.username.replace('@', '') === match.params.username)[0] : null;

    return (
        <>

            <Helmet>

                <title>DevNetwork - {activeUser ? `${activeUser.firstname} ${activeUser.lastname}` : 'Loading'}</title>

            </Helmet>

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

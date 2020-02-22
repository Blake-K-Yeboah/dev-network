import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar';
import Container from '../../layout/Container';
import Header from './Header';
import Sidebar from '../Projects/Sidebar';
import PostModal from '../Projects/PostModal';

const Users = inject("usersStore", "projectStore")(observer(({ usersStore, projectStore }) => {

    useEffect(() => {
        usersStore.fetchUsers();
    }, [usersStore]);

    return (
        <>
            <Navbar />

            <Container>

                <Sidebar />

                <Header />

                <Footer />

            </Container>

            <PostModal />

            <div className={`overlay ${!projectStore.modalStatus ? 'hidden' : ''}`} onClick={() => projectStore.toggleStatus()}></div>

        </>
    )
}))

export default Users

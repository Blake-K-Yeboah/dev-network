import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar';
import Container from '../../layout/Container';
import Header from './Header';
import Sidebar from '../Projects/Sidebar';
import SearchModal from './SearchModal';

const Users = inject("usersStore")(observer(({ usersStore }) => {

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

            <SearchModal />

            <div className={`overlay ${!usersStore.searchModalStatus ? 'hidden' : ''}`} onClick={() => usersStore.toggleSearchModalStatus()}></div>

        </>
    )
}))

export default Users

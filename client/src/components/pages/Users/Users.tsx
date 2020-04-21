import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import { Helmet } from 'react-helmet';
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar';
import Container from '../../layout/Container';
import Header from './Header';
import Sidebar from '../Projects/Sidebar';
import SearchModal from './SearchModal';
import { IStoreProps } from '../../../types';
import MessageSection from '../../message/MessageSection';
import MessageModal from '../../message/MessageModal';

const Users = inject("usersStore")(observer(({ usersStore }: IStoreProps) => {

    useEffect(() => {
        usersStore.fetchUsers();
    }, [usersStore]);

    return (
        <>
            <Helmet>

                <title>DevNetwork - Users</title>

            </Helmet>

            <Navbar />

            <Container>

                <Sidebar />

                <MessageSection />

                <Header />

                <Footer />

            </Container>

            <SearchModal />

            <MessageModal />

            <div className={`overlay ${!usersStore.searchModalStatus ? 'hidden' : ''}`} onClick={() => usersStore.toggleSearchModalStatus()}></div>

        </>
    )
}))

export default Users

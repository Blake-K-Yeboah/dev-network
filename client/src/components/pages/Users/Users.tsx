import React from 'react'
import { inject, observer } from 'mobx-react'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar';
import Container from '../../layout/Container';

const Users = inject("usersStore")(observer(({ usersStore }) => {
    return (
        <>
            <Navbar />

            <Container>

                <Footer />

            </Container>

        </>
    )
}))

export default Users

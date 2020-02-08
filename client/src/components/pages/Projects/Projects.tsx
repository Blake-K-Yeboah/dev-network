import React from 'react'
import { inject, observer } from 'mobx-react';

const Projects = inject("authStore")(observer(() => {
    return (
        <>
            <p>Hello!</p>
        </>
    )
}))

export default Projects;

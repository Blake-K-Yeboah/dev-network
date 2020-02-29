import React from 'react'
import Headings from './Headings'
import Slidebar from './Slidebar'
import Projects from './Sections/Projects'
import { Iuser } from '../../../../types'
import Followers from './Sections/Followers';

interface Iprops {
    profile: Iuser
}

const ProfileSlider = (props: Iprops) => {
    return (
        <div className="profile-slider">
            <Headings />
            <Slidebar />
            <Projects profile={props.profile} />
            <Followers profile={props.profile} />
        </div>
    )
}

export default ProfileSlider

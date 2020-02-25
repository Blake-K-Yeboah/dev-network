import React from 'react'
import { Iuser } from '../../../types'

interface IresultProps {
    result: Iuser
}

const ResultItem = (props: IresultProps) => {
    return (
        <div className="user-result">
            <img src={`/uploads/profile/${props.result.profileIcon}`} alt={props.result.username} className="profile-icon" />
            <h3 className="name">{props.result.firstname} {props.result.lastname}</h3>
            <h6 className="username">{props.result.username}</h6>
            <div className="btn-group">

            </div>
        </div>
    )
}

export default ResultItem

import React from 'react'

interface Iprops {
    title: string,
    value: number
}
const AnalyticBox = (props: Iprops) => {
    return (
        <div className="analytic-box">
            <h2 className="analytic-title">{props.title}</h2>
            <h1 className="analytic-value">{props.value}</h1>
        </div>
    )
}

export default AnalyticBox

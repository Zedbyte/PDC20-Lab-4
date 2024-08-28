import React from 'react'

function Greet(props) {
    return (
        <>
            <h1>Hello, {props.name}!</h1>
            <h1>Quote, {props.quote}!</h1>
        </>
    )
}

export default Greet;
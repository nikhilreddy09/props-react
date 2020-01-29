import React from 'react'

import './App.css'

function Joke(props) {
    return (
    <div className="single">
        <p> question : {props.data.question}</p>
        <p> punchline :{props.data.punchline}</p>
    </div>
            )
}
export default Joke
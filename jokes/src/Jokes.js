import React from "react";

export default function Jokes(props) {
    return(
        <div className="joke-card">
            <h2>{props.setup}</h2>
            <p>{props.punchline}</p>
        </div>
    )
}
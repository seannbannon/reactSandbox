import React from "react";

export default function Card(){
    return(
        <div className="card">
                <img className="katiez" alt="katiez" src={require("../images/katiezaferes.png")} />
                <div className="cardstats">
                    <img className="star" alt="star" src={require("../images/star.png")} />
                    <span>5.0</span>
                    <span className="gray">(6) • </span>
                    <span className="gray">USA</span>
                </div>
                <p>Life Lessons with Katie Zaferes</p>
                <p>From $136 /person</p>
        </div>
    )
}
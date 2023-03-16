import React from "react";

export default function Card(){
    return(
        <div>
            <div className="pics">
                <img className="katiez" alt="katiez" src={require("../images/katiezaferes.png")} />
                <img className="star" alt="star" src={require("../images/star.png")} />
                <p>Life lessons with Katie Zaferes</p>
            </div>
        </div>
    )
}
import React from "react";

export default function Card(props){
    return(
            <div className="card">
                <img src={props.mainphoto} />
                <div className="cardstats">
                    <img className="star" alt="star" src={require("../images/star.png")} />
                    <span>{props.rating}</span>
                    <span className="gray">"({props.numberofratings})"</span>
                    <span className="gray">{props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">{props.price}</span></p>
            </div>
        // <div className="card">
        //         <img className="katiez" alt="katiez" src={require("../images/katiezaferes.png")} />
        //         <div className="cardstats">
        //             <img className="star" alt="star" src={require("../images/star.png")} />
        //             <span>5.0</span>
        //             <span className="gray">(6) • </span>
        //             <span className="gray">USA</span>
        //         </div>
        //         <p>Life Lessons with Katie Zaferes</p>
        //         <p><span className="bold">From $136</span> /person</p>
        // </div>
    )
}
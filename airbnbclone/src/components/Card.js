import React from "react";

export default function Card(props){
    return(
            <div className="card">
                <img className ="katiez" alt="katiez" src={require(`../images/${props.mainphoto}`)} />
                <div className="cardstats">
                    <img className="star" alt="star" src={require("../images/star.png")} />
                    <span>{props.rating}</span>
                    <span className="gray">({props.numberofratings}) • </span>
                    <span className="gray">{props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
    )
}
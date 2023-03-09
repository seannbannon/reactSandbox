import React from "react";


export default function Header(){
    return(
        <div className="header">
            <img className="mypic" src='./me.png' alt="me" />
            <h1>Sean Bannon</h1>
            <h4>Full Stack Developer</h4>
            <a href = 'https://www.linkedin.com/in/seanbannon1/'>
                <button type="submit" className="buttons"><i class="fa fa-linkedin-square"></i>LinkedIn</button>
            </a>
            <a href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                <button type="submit" className="buttons"><i class="fa fa-youtube-square"></i>YouTube</button>
            </a>


        </div>
    )
}
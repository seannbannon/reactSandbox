import React from "react";


export default function Header(){
    return(
        <div className="header">
            <img className="mypic" src='./me.png' alt="me" />
            <h1>Sean Bannon</h1>
            <h4>Full Stack Developer</h4>
            {/* MAKE THE BUTTON TSAKE U TO LINKEDIN */}
            <a href = 'https://www.linkedin.com/in/seanbannon1/'>
                <button type="submit" className="buttons"><i class="fa fa-linkedin-square"></i>LinkedIn</button>
            </a>
        </div>
    )
}
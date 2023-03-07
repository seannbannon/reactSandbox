import React from "react";

export default function Header(){
    return(
        <div className="header">
            <img className="mypic" src='./me.png' alt="me" />
            <h1>Sean Bannon</h1>
            <h4>Full Stack Developer</h4>
            {/* MAKE THE BUTTON TSAKE U TO LINKEDIN */}
            <button type="submit" className="buttons">HELLO</button>
        </div>
    )
}
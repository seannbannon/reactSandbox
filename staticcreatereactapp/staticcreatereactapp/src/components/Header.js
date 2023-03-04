import React from "react"

export default function Header(){
    return (
        <header>
        <nav className="nav">
            <img className = "navimg" src="./reactlogo.png" />
            <ul className = "nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
    )
}
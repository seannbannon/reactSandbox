import React from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import "./style.css"


export default function App() {
    return (
        <div>
            <Nav />
            <Hero />
            <Card 
                mainphoto="katiezaferes.png"
                rating = "5.0"
                numberofratings = {6}
                country = "USA"
                title = "Life Lessons with Katie Zaferes"
                price = {136}
            />
        </div>
    )
}

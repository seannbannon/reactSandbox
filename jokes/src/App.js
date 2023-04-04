import React from "react"
import "./index.css"
import Jokes from "./Jokes"

export default function App() {
    return (
        <div className="jokes">
          <Jokes 
            setup="What's black and white and red all over?"
            punchine="A nun falling down the stairs!"
          />
        </div>
    )
}


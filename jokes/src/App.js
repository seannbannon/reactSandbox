import React from "react"
import "./index.css"
import Jokes from "./Jokes"

export default function App() {
    return (
        <div className="jokes">
          <Jokes 
            setup="What's black and white and red all over?"
            punchline="A nun falling down the stairs!"
          />
          <Jokes 
            setup="Why don't pirates travel on mountain roads?"
            punchline="Scurvy!"
          />
          <Jokes 
            setup="Why do bees stay in the hive during the winter?"
            punchline="Swarm!"
          />
          <Jokes 
            setup="I got my daughter a fridge for her birthday..."
            punchline="I can't wait to see her face light up when she opens it!"
          />
          <Jokes 
            setup="What's the best part about gardening?"
            punchline="Getting down and dirty with your hoes!"
          />
        </div>
    )
}


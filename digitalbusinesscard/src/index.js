import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
import Body from "./Body";

function App(){
    return(
        <div>
            <Body />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))


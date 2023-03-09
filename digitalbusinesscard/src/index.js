import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App(){
    return(
        <div className="card">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))


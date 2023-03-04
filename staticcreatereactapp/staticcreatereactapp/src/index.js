import React from "react";
import ReactDOM  from "react-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import "./style.css";

function App() {
    return(
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
import React from "react";
import ReactDOM  from "react-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return(
    <div>
        <Header />
        <Footer />
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
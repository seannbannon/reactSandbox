//Rendering React Code, simple list syntax
// ReactDOM.render(
//     <ul><li>1.You Rock</li><li>2.You Roll</li></ul>,
//     document.getElementById('root'))


// imperative programming example (React is declarative)
// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program."
// h1.className = "header"
// document.getElementById("root").append(h1)


// function MainContent() {
//     return <h1>I am learning React!</h1>
// }
// ReactDOM.render(
//     <div>
//         <MainContent />
//     </div>,
//     document.getElementById('root')
// )


//JSX is basically HTML in React code 
// const navBar = (
//         <nav>
//             <h1>Sean's Website</h1>
//             <ul>
//                 <li>Pricing</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>
// )
// ReactDOM.render(
//     navBar,
//     document.getElementById('root')
// )



// const page = (
//     <div>
//         <h1>Reasons I love React</h1>
//         <h3>cuz:</h3>
//         <ol>
//             <li>It's freaking cool</li>
//             <li>It's easy</li>
//         </ol>
//     </div>
// )

// document.getElementById('root').append(JSON.stringify(page))




// import React from 'react'
// import ReactDOM from 'react-dom'

const page = (
    <div>
        <header>
            <nav>
                <img src="./reactlogo.png" width="40px" />
            </nav>
        </header>
        <h1>Fun Facts About React</h1>
        <ol>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ol>
        <footer>
            <small>@2023 Bannon development. All rights reserved.</small>
        </footer>
    </div>
)
console.log(page)

ReactDOM.render(page, document.getElementById('root'))
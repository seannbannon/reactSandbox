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
        <img src="./reactlogo.png" width="40px" />
        <h1>Fun Facts About React</h1>
    </div>
)

ReactDOM.render(page, document.getElementById('root'))
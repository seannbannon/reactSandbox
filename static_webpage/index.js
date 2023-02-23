// ReactDOM.render(
//     <ul><li>1.You Rock</li><li>2.You Roll</li></ul>,
//     document.getElementById('root'))

// imperative programming example (React is declarative)
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program."
h1.className = "header"
document.getElementById("root").append(h1)


function MainContent() {
    return <h1>I am learning React!</h1>
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.getElementById('root')
)
import React from "react"
import ReactDOM from "react-dom/client"

const topInfo = React.createElement("span", { style:{display:"flex", justifyContent:"center", color:"red"}} , "special offer");

const Header = () =>{
    return (
        <div className="nav">
            <div className="nav-logo">
                logo
            </div>
            <div className="nav-links">
                <span><a href="#">link 1</a></span>
                <span><a href="#">link 2</a></span>
                <span><a href="#">link 3</a></span>
                <span><a href="#">link 4</a></span>
                <span><a href="#">link 5</a></span>
                <span><a href="#">link 6</a></span>
            </div>
        </div>
    )
}

const App = ()=>{
    return (
        <>
            {topInfo}
            <Header></Header>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>)
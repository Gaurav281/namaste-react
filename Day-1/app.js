 //using react
const heading = React.createElement("h1", {id: "heading", style: {background: "#6789"}}, "hello from react");
//create element == element , attributes(object) , children(array)
//heading is a react element which is a javascript object

const parent = React.createElement("div", {id: "parent"}, 
    [
        React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {}," h1 is a grand child"), React.createElement("h2", {}," h2 is a grand child")]
    ),
    React.createElement("div", {id: "child2"}, 
        [React.createElement("h1", {}," h1 is a grand child"), React.createElement("h2", {}," h2 is a grand child")]
    )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);

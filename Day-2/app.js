import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement("h1" ,{}, "this is a react element" );

const FunctionComponent = ()=>{
    return (
        <div className='div'>This is a react component</div>
    )
}

const SecondComp = function(){
    return (
        <div>
            {element}
            <FunctionComponent/>
            {FunctionComponent()}
            <FunctionComponent></FunctionComponent>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(element)
root.render(<SecondComp/>)
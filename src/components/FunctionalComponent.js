import React from 'react'

// function functionalComponent()
// {
//     return <h1>Hello I am functional component</h1>
// }
const functionalComponent = (props) => 
{
    //Destructing the props object into simple variables
    const {name, type} = props;
    return (
        <div>
            <h1>Hello I am functional component made by {name} and {type}</h1>
            {props.children}
        </div>
        
    );
}

export default functionalComponent
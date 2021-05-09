import React from 'react'

function ChildComponent(props) 
{
    return (
        <div>
            {/* This arrow function is returning a string child* */}
            <button onClick = {() => props.eventHandler("child")}>ChildComponent</button>            
        </div>
    )
}

export default ChildComponent

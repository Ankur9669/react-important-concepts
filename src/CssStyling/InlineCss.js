import React from 'react'

function InlineCss() 
{
    //Object for inline css
    let style = {
        color: "red",
        fontSize: "2rem"
    }
    return (
        <div>
            <h1 style = {style.header}>Hello I am Inline Element</h1>            
        </div>
    )
}

export default InlineCss

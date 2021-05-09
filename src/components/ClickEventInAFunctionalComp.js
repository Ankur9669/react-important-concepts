import React from 'react'

function ClickEventInAFunctionalComp()
{
    return (
        <div>
            <button onClick = {() => onClickEventHandler()}>Click me</button>           
        </div>
    )
}
function onClickEventHandler()
{
    console.log("Clicked");
}




export default ClickEventInAFunctionalComp

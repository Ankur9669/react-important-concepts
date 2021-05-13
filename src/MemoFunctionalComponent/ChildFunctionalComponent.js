import React from 'react'

function ChildFunctionalComponent() 
{
    console.log("child functional component");
    return (
        <div>
            ChildFunctionalComponent
        </div>
    )
}

export default React.memo(ChildFunctionalComponent);

import React from 'react'

//This is the forwarding ref method.
const InputComponent = React.forwardRef((props, ref) => 
{
    return(
        <div>
            <input type = "text" ref = {ref}></input>
        </div>
    )
})

export default InputComponent

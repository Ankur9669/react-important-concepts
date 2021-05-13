import React, { Component } from 'react'

export class InputComponent extends Component 
{
    constructor(props) {
        super(props)
    
        this.focusRef = React.createRef();
    }
    
    focusOnInput()
    {
        //Here we are focusing on input element
        //this.focusRef.current.focus();
        this.focusRef.current.value = "Ankur";
    }

    render() {
        return (
            <div>
                <input type = "text" ref = {this.focusRef}/>        
            </div>
        )
    }
}

export default InputComponent

import React, { Component } from 'react'
import Input from "./InputComponent";

export class ParentComponent extends Component 
{
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }
    
    onClickHandler()
    {
        //Here we are focusing on input element
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                {/* Here we are forwarding ref to input component* */}
                <Input ref = {this.inputRef}/>
                <button onClick = {() => onClickHandler()}>ClickMe</button>
            </div>
        )
    }
}

export default ParentComponent

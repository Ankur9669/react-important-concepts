import React, { Component } from 'react'
import InputComponent from "./InputComponent";
export class ClassComponentForRef extends Component
{
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }
    
    clickHandler()
    {
        //We are calling focusOnInput method defined in child component
        this.inputRef.current.focusOnInput();
    }

    render() {
        return (
            <div>
                {/*Here we are attaching a ref on a component itself*/ }
                <InputComponent ref = {this.inputRef}/>
                <button onClick = {() => this.clickHandler()}>ClickMe</button>
            </div>
        )
    }
}

export default ClassComponentForRef

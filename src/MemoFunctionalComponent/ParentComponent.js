import React, { Component } from 'react'
import ChildComponent from "./ChildFunctionalComponent";
export class ParentComponent extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Ankur"
        }
    }
    
    componentDidMount()
    {
        setInterval(() => {
            this.setState({
                name: "Ankur"
            })
        }, 1000);
    }
    render() {
        console.log("*************parent Component*************");
        return (
            <div>
                Parent Component
                <ChildComponent/>
            </div>
        )
    }
}

export default ParentComponent

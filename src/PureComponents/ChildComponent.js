import React, { Component } from 'react'

export class ChildComponent extends Component {
    render() 
    {
        console.log("child component")
        return (
            <div>
                ChildComponent
            </div>
        )
    }
}

export default ChildComponent

import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
class ParentComponent extends Component 
{
    constructor(props) {
        super(props)
        this.state = {
            name: "Hello"
        }
        this.clickEventHandler = this.clickEventHandler.bind(this);
    }
    
    clickEventHandler(childName)
    {
        console.log("Yes");
        alert(`${this.state.name} from ${childName}`);   
    }
    render() {
        return (
            <div>
                {/*Passing method as a parameter to props* */}
              <ChildComponent eventHandler = {this.clickEventHandler}/>  
            </div>
        )
    }
}

export default ParentComponent

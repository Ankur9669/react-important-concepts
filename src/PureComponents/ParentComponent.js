import React, { Component, PureComponent } from 'react'
import ChildComponent from "./ChildComponent";
import Purecomponent from "./Purecomponent";

//The difference beetween purecomponent and normal component is 
//PureComponent compares the previous props with current props and
//pervious state with current state and based on that render happens

//Whereas Normal component just renders without comparing
class ParentComponent extends PureComponent
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
        console.log("******************parent component render*******************")
        return (
            <div>
                <ChildComponent name = "this.state.name"/>
                <Purecomponent name = "this.state.name"/>
            </div>
        )
    }
}

export default ParentComponent

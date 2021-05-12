import React, { Component } from 'react'

class LifecycleMethods extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             name : "ankur"
        }
        this.onClick = this.onClick.bind(this);
        console.log("constructor");
    }
    
    static getDeriveStateFromProps(props, state)
    {
        console.log("getDerivedStateFromProps");
    }

    componentDidMount()
    {
        console.log("componentDidMount");
    }

    shouldComponentUpdate()
    {
        console.log("shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log("getSnapShotBeforeUpdate");
        return null;
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate");
    }

    onClick()
    {
        this.setState({
            name: "Yuee"
        })
    }

    render() {
        console.log("render");
        return (
            <div>
                <h1>Ankur</h1>
                <button onClick = {this.onClick}>Change</button>                
            </div>
        )
        
    }
}

export default LifecycleMethods

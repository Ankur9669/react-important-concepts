import React, { Component } from 'react'

export class GreetingComponent extends Component
{
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() 
    {
        //First Method of conditional rendering
        // if(this.state.isLoggedIn)
        // {
        //     return (
        //         <div>
        //             Hello Ankur       
        //         </div>
        //     )
        // }
        // else
        // {
        //     return (
        //         <div>
        //             Hello Guest       
        //         </div>
        //     )
        // }
        
        //Second method of conditional rendering
        return this.state.isLoggedIn ? 
        (<div>Hello Ankur</div>) :
        (<div>Hello Guest</div>) 
    }
}

export default GreetingComponent





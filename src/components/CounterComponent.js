import React, { Component } from 'react'

class CounterComponent extends Component 
{
    constructor()
    {
        super();
        this.state = {
            clickCount : 0
        }
    }

    increaseCounter()
    {
       //Getting the count state and increasing 
       //This method should be used when we dont't need the previous value to update
       //the UI
        // this.setState({
        //     clickCount : this.state.clickCount + 1
        // });


        //This method takes the previous state as a parameter in a Arrow func.
        //If we wanna do something after setState finishes than we have to pass
        //a callback function as a second argument.
        this.setState(
            (previousState) => 
        ({
            clickCount : previousState.clickCount + 1
        }), 
        () =>//callback function after setState 
        {
            console.log(this.state.clickCount);     
        });
    }

    render()
    {
        return (
            <div>
                <button onClick = {() => this.increaseCounter()}>Click Me</button>
                {/*Using this is very important else it 
                would not be able to find the funtion */} 
                <h2>{this.state.clickCount}</h2>
            </div>
        ) ;
    }    
}    

export default CounterComponent;
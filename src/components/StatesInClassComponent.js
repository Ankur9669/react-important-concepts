import React, {Component} from 'react';

class StatesInClassComponent extends Component
{
    constructor()
    {
        super()
        //Setting the state object
        this.state = {
            message: 'Hello1'
        }
    }

    onChange()
    {
        //remember this is a function not a object
        this.setState({
            message: 'Thankks for clicking'
        });
    }

    render()
    {
        return(
            <div className = "ankur">
            <h1>{this.state.message}</h1>
            <button onClick={() => this.onChange()}> Click Me</button>
        </div>
        );
    }
}


export default StatesInClassComponent;
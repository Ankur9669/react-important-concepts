import React, {Component} from 'react';

class ClassComponent extends Component
{
    render()
    {
        //Destructing the props object into simple variables
        const {name, type} = this.props;
        return (
            <div>
                <h1>Welcome this is a class component {name} and {type}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default ClassComponent;
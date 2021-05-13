import React, { Component } from 'react'

export class RefComponent extends Component
{
    //Refs are used to access dom node of react elements and components.
    constructor(props) 
    {
        super(props);
        //First way of creating refs and this is recommended way
        //this.focusRef = React.createRef();

        //Second way of creating refs
        //callback refs
        this.cbRefs = null;
        this.setcbRefs = (element) => {
            this.cbRefs = element;
        }
    }
    
    //This method loads after render
    componentDidMount()
    {
        //Method 1. Through this we are focusing on the input element 
        //this.focusRef.current.focus();

        //Method 2. Callback refs
        if(this.cbRefs != null)
        {
            this.cbRefs.focus();
        }
    }

    render() {
        return (
            <div>
                {/*<input type="text" ref = {this.focusRef}></input>*/}

                {/*this.setcbRefs implicitly passes the dom node to the function
                then we can make changes to that dom element*/}
                {<input type="text" ref = {this.setcbRefs}></input>}
            </div>
        )
    }
}

export default RefComponent

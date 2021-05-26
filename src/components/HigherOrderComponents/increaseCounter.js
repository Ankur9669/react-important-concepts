import React from "react";
import { useState } from "react";

//Here we make a new function which accepts a component as a parameter
//and returns an enhanced component.
const IncreaseCounter = (OriginalComponent, increaseValue) => {    
    function NewComponent() 
    {
        //These are the funtionalities which we add on the original component
        const [count, setCount] = useState(0);
        function increase() 
        {
            setCount(count + increaseValue);
        }
        return (
            <OriginalComponent count = {count} increase = {increase}>
            </OriginalComponent>
        )    
    }       
    return NewComponent;
}
export default IncreaseCounter;
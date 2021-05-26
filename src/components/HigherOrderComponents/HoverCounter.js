import React from 'react'
import {useState} from "react";
import IncreaseCounter from "./increaseCounter";
function HoverCounter(props) 
{
    //const[count, setCount] = useState(0);
    return (
        <div>
            <h1 onMouseOver = {() => props.increase()}>
                Hello Hovered {props.count} times
            </h1>
        </div>
    )
}

export default IncreaseCounter(HoverCounter, 10);

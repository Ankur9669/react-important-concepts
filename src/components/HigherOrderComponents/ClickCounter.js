import React from 'react'
import {useState} from "react";
import IncreaseCounter from "./increaseCounter";
function ClickCounter(props) 
{
    return (
        <div>
            <button onClick = {() => props.increase()}>
                Clicked {props.count} times    
            </button>            
        </div>
    )
}

export default IncreaseCounter(ClickCounter, 5);

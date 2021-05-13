import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {PureComponent} from "react";
class Purecomp extends PureComponent 
{
    render() 
    {
        console.log("pure component");
        return (
            <div>
                Purecomponent
            </div>
        )
    }
}

export default Purecomp

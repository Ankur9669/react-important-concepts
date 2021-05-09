import React, { Component } from 'react'

class ClickEventInAClassComp extends Component 
{
    OnClickEventHandler()
    {
        console.log("Yes Class Component Click");
    }
    render() {
        return (
            <div>
                {/* OnClick handler in a class component 
                must pass a arrow funtion* */}
                <button onClick = {() => this.OnClickEventHandler()}>ClassButton</button>                
            </div>
        )
    }
}



export default ClickEventInAClassComp

import React, { Component } from 'react'

class Form extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             inputText : "",
             languageSelected: "react"
        }
        this.onChangeEventHandler = this.onChangeEventHandler.bind(this);
        this.onClickEventHandler = this.onClickEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    
    //When the text in the input box changes this event triggers 
    onChangeEventHandler(event)
    {
        this.setState({
            inputText: event.target.value
        });
    }

    //When user select the language from the dropdown this event triggers
    onClickEventHandler(event)
    {
        this.setState({
            languageSelected: event.target.value
        });   
    }

    //When the submit button is clicked this event is triggered
    onSubmitEventHandler(event)
    {
        console.log(this.state.languageSelected);
        console.log(this.state.inputText);
        event.preventDefault();
    }

    render() 
    {
        //const [inputText] = this.state;
        return (
            <form onSubmit = {this.onSubmitEventHandler}>
                <label>Input: </label>
                <input type = "text"
                       value = {this.state.inputText}
                       onChange = {this.onChangeEventHandler}>

                </input>
                <br></br>
                <select onChange = {this.onClickEventHandler} value = "react">
                    <option value = "react">React</option>
                    <option value = "javascript">Javascript</option>
                    <option value = "java">Java</option>
                </select>
                <br></br>
                <button type = "submit"
                    onClick = {this.onSubmitEventHandler}>
                        Submit
                </button>
            </form>
        )
    }
}

export default Form

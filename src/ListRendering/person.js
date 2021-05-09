import React from 'react'

function person(props)
{
    //Destructuring the props
    let personName = props.person.name;
    let personAge = props.person.age;
    let personId = props.person.id;
    return (
        <div>
            <h2>Name is: {personName}, Age is: {personAge}, Id is: {personId}</h2>
        </div>
    )
}

export default person

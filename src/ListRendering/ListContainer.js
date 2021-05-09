import React from 'react'
import Person from "./person"
function ListContainer() 
{
    //Person Array
    let person = [
        {
            name: "Ankur",
            id: 1,
            age: 21
        },
        {
            name: "Ankur",
            id: 2,
            age: 21
        }
    ];

    return (
        <div>
        {
            //Passing the person array as a props
            //Dont use index as a key as it has many diverse affects on ui
            //Try to generate a unique key
            person.map(item => <Person person = {item} key = {item.id}/>)
        }
        </div>
    )
}

export default ListContainer

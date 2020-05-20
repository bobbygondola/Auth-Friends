import React from 'react'

// const edit = () => {

// }

const Card = props => {
    return (
        <div className="card" >
            <h2>{props.friend.name}</h2>
            <p>Age: {props.friend.age}</p>
    <p>Contact: {props.friend.email}</p>
    <button className="editdelete">Delete</button>
    <button className="editdelete" >Edit</button>
        </div>
    )
}
export default Card;
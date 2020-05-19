import React from 'react'

const Card = props => {
    return (
        <div className="card">
            <h2>{props.friend.name}</h2>
            <p>Age: {props.friend.age}</p>
    <p>Contact: {props.friend.email}</p>
        </div>
    )
}
export default Card;
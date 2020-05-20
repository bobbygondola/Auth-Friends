import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const FriendForm = () => {
    const [addFriend, setAddFriend] = useState({
        name: '',
        age: '',
        email: ''
    });

    const handleChange = e => {
        e.preventDefault()
        setAddFriend({
            ...addFriend,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/friends', addFriend)
        .then(res => {
            console.log(res)
            setAddFriend({name: '', age: '', email: ''})
        })
    }
    function refreshPage() {
        window.location.reload(false);
      }
    return (
        <div>
            
            <form onSubmit={handleSubmit} className="formFriend">
            <div id="adda">
                Add A New Connect!
            </div>
            <input 
                type='text'
                name='name'
                onChange={handleChange}
                value={addFriend.name}
                placeholder="First Name"
            />
            <br />
            <input 
                type='number'
                name='age'
                onChange={handleChange}
                value={addFriend.age}
                placeholder="Last Name"
            />
            <br />
            <input 
                type='email'
                name='email'
                onChange={handleChange}
                value={addFriend.email}
                placeholder="Contact Info"
            />
            <br />
            <button type='submit' onClick={refreshPage}>Add Network!</button>
        </form>
            
        </div>
    )
}
export default FriendForm;
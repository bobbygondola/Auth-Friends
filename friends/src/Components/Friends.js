import React, { useEffect, useState } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import Card from './Card'
import FriendForm from './FriendForm'




const Friends = () => {
    const [friendsList, setFriendsList] = useState([])

    useEffect(() => {
        axiosWithAuth()
          .get("/api/friends")
          .then(res => setFriendsList(res.data))
          .catch(err => console.log(err));
      }, []);

    return (
        <div>
        <div id="introfriends">
            <h2>Welcome to your Friends List</h2>
            <p>Add or Delete your friends!</p>
            <p>Once you delete, theyre gone!</p>
            <FriendForm />
        </div>
            {friendsList.map(friend => {
                return(
                    <Card friend={friend} key={friend.id}/>
                )
            })}
        </div>
    )
}
export default Friends;
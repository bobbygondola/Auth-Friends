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
            <div className="subs">
            <h2>Welcome to your Biz Cards</h2>
            <p>Add or Delete Contacts!</p>
            <p>Keep track of your network!</p>
            </div>
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
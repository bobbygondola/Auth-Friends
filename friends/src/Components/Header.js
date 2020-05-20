import React from 'react'
import { Link } from 'react-router-dom'
const Header = props => {
    return (
        <div>
            <h1>Welcome To Friends List!</h1>
            <p><Link to="/login">Login</Link> to Interact!</p>
        </div>
    )
}
export default Header;
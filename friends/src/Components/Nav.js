import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div>
        <nav>
            <h3>Biz Cards</h3>
            <div id="navbut">
           <Link to="/"><button id="homebut">Home</button></Link> 
            <button>Contact Us</button>
            <button>About</button>
            <button>Help</button>
            </div>
        </nav>
            
        </div>
    )
}
export default Nav
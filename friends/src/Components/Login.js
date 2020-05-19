import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = props => {
    const [values, setValues] = useState({
        username: '',
        password: ''
    })
    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const login = e => {
        e.preventDefault()
        console.log(values)
        // make a POST request to the login endpoint
        // _if_ the creds match what's in the database, the server will return a JSON web token
        // set the token to localStorage (sessions)
        // navigate the user to the "/protected" route
        axiosWithAuth()
            .post('/api/login', values)
            .then( res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/Friends')
            }) 
        setValues({
            username: '',
            password: ''
        })
    }
    return (
        <div>
            <form onSubmit={login} className="loginForm">
                <h3>Login to Friends!</h3>
                Username: <input 
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    />
                    <br />
                Password: <input 
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange} />
                    <br />
                    <button>Submit</button>
            </form>
        </div>
    )
}
export default Login;
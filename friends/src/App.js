import React from 'react';
import logo from './logo.svg';
import Login from './Components/Login'
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Welcome Friends</h1>
      <p>This is a friends list app, <Link to="/login"><button>Click Here</button></Link> to Login!</p>
      <Switch>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
    </div>
  );
}

export default App;

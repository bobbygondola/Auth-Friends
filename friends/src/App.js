import React from 'react';
import logo from './logo.svg';
import Login from './Components/Login'
import Header from './Components/Header'
import Friends from './Components/Friends'
import './App.css';
import PrivateRoute from './PrivateRoute'
import { Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Header}/>
          <Route  exact path="/login" component={Login} />
          <PrivateRoute path="/friends" exact component={Friends} />
        </Switch>
    </div>
  );
}

export default App;

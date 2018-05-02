import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './components/login.js';
import NavigationBar from './components/navbar.js';
import Main from './components/main.js';
import User from './components/user.js';
import Profile from './components/profile.js';
import userCurrency from './components/userCurrency.js';

class App extends Component {

  render() {

    return (
      <div className="App">
        <NavigationBar />
        <Router>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/user" component={User} />
          <Route path="/login" component={LoginPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/userCurrency" component={userCurrency} />
        </div>
          </Router>
      </div>
    );
  }
}

export default App;

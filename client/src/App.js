import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginPage from './components/login.js';
import NavigationBar from './components/navbar.js';

class App extends Component {

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {

    const Home = () => <h1>Home</h1>;
    const Admin = () => <h1>Admin</h1>;
    
    const NavBar = () => (
      <ul>
        <li>
          <Link to="/">Home</Link>      
        </li>
        <li>
        <Link to="/admin">Admin</Link>
        </li>
      </ul>
    );

    return (
      <div className="App">
        <NavigationBar />
        <p className="App-intro">
          {this.state.response}
        </p>
        <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          <Route path="/logs" render={() => <h1>Logs</h1>} />
          <Route path="/NavBar" component={NavBar} />
          <Route path="/login" component={LoginPage} />
        </div>
          </Router>
      </div>
    );
  }
}

export default App;

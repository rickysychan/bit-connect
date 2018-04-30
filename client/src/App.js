import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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

    return (
      <div className="App">
        <NavigationBar />
        <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={LoginPage} />
        </div>
          </Router>
      </div>
    );
  }
}

export default App;

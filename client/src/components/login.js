import React from 'react';
import { GoogleLogin } from 'react-google-login';
import '../css/login.css';

let responseGoogle = (response) => {
  console.log(response)
  console.log(
    "familyName: " + response.profileObj.familyName + "  FirstName: " + response.profileObj.givenName 
    + "  email: " + response.profileObj.email 
  );
  console.log("Id Token: " + response.tokenId)
}

class LoginPage extends React.Component {
  state = {
    response: 'moo'
  }

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
  }

    render() {
      
      return (
        <div className="loginPage-div">
                <p className="App-intro">
          {this.state.response}
        </p>
          <h1> Login With Google</h1>
          <GoogleLogin 
            clientId="447928153881-c8c151kqgksh31l6h2kc0aflhrsm03td.apps.googleusercontent.com"
            buttonText="Login/signup"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />

        </div>
      );
    }
  }
export default LoginPage
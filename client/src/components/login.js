import React from 'react';
import { GoogleLogin } from 'react-google-login';
import '../css/login.css';

let responseGoogle = (response) => {
  console.log(response)
  let lastName = response.profileObj.familyName
  let firstName = response.profileObj.givenName 
  let email = response.profileObj.email 
  let tokenid = response.googleId

  let userData={
    firstName: firstName,
    lastName: lastName,
    email: email,
    token_id: tokenid
  }

  window.location.replace("http://localhost:3000/")
  
  return fetch('/api/user', {
    method: 'post',
    body: JSON.stringify(userData),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}



class LoginPage extends React.Component {
  state = {
    response: ''
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
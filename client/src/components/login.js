import React from 'react';
import { GoogleLogin } from 'react-google-login';
import '../css/login.css';


const responseGoogle = (response) => {
  console.log(response);
}

class LoginPage extends React.Component {

    render() {
      
      return (
        <div className="loginPage-div">
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
export default LoginPage;
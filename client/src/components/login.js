import React from 'react';
import { Button } from 'react-bootstrap';

class LoginPage extends React.Component {
    render() {
      return (
        <div className="LoginPage-div" id="contact-div">
          <h1> Want to get in touch? </h1>
          <Button type="submit" bsStyle="primary">
              Hey Ricky! I want to...
            </Button>
        </div>
      );
    }
  }
export default LoginPage;
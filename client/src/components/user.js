import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class UserPage extends React.Component {
    render() {
        return (
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                <Button bsStyle="primary">Primary</Button>
                </p>
            </Jumbotron>
        )
    }
}

export default UserPage
import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Current Crypto Currency Values</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                    <p className="lead">
                    <Button bsStyle="primary">Primary</Button>
                    </p>
                </Jumbotron>

            </div>
        )
    }
}

export default Dashboard
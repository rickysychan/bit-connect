import React from 'react';
import Dashboard from './dashboard.js';
import { Jumbotron, Button, Image } from 'react-bootstrap';

class Main extends React.Component {
    render() {
        return (
            <div>
            <Jumbotron className='jumbotron'>
                <h1 className="display-3">Current Crypto Currency Values</h1>
                <hr className="my-2" />
                <Image className='jumbo-image' src='https://cdn-images-1.medium.com/max/1000/0*_eFs7xwwmbCPPEWz.png?width=639&height=319' responsive />
                <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                <p className="lead">
                <Button onClick={() => this.send()} bsStyle="primary">Change color</Button>
                <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
                <button id="red" onClick={() => this.setColor('red')}>Red</button>
                </p>
            </Jumbotron>
            <div>
                <Dashboard />
            </div>
            <div className="lower-third">
                        <h1> The world's most reliable CryptoCurrency Monitor </h1>
                        <i class="fab fa-bitcoin coin-image"></i>
                        <p> We are ready to help you become more informed, ready to get started? </p>
                        <Button bsStyle="primary">I'm ready</Button>
            </div>
            </div>
        )
    }
}

export default Main
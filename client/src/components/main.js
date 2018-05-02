import React from 'react';
import Dashboard from './dashboard.js';
import { Jumbotron, Button, Image } from 'react-bootstrap';
import socketIOClient from 'socket.io-client'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            endpoint: "http://127.0.0.1:5000", // this is where we are connecting to with sockets
            message: ''
        }
    }
    // method for emitting a socket.io event
    send = () => {
        const socket = socketIOClient(this.state.endpoint)
        
        // this emits an event to the socket (your server) with an argument of 'message'
        
        console.log(this.state.message)
        socket.emit('change message', this.state.message) 
      }

        setMessage(message){
            this.setState({ message })
            this.send()
          }

    render() {
        // Within the render method, we will be checking for any sockets.
        const socket = socketIOClient(this.state.endpoint)
        
        // socket.on is another method that checks for incoming events from the server

        socket.on('change message', (message_) => {
            this.setState({message: message_})
        })

        return (
            <div>
        <p> {this.state.message} </p>
            <Jumbotron className='jumbotron'>
                <h1 className="display-3">Current Crypto Currency Values</h1>
                <hr className="my-2" />
                <Image className='jumbo-image' src='https://cdn-images-1.medium.com/max/1000/0*_eFs7xwwmbCPPEWz.png?width=639&height=319' responsive />
                <p>The latest info on the world of Cryptocurrency. Always Accurate. Always Reliable.</p>
                <p className="lead">
                </p>
            </Jumbotron>
            <div>
                <Dashboard setMessage={this.setMessage.bind(this)} />
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
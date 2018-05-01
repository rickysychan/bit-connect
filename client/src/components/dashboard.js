import React from 'react'
import socketIOClient from 'socket.io-client'
import { Jumbotron, Button, Table, Image } from 'react-bootstrap';
import '../css/dashboard.css';


class Dashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            endpoint: "http://127.0.0.1:5000", // this is where we are connecting to with sockets
            color: 'white',
            data: []
        }
      }

      componentDidMount(){
        let grabData = () => {
            return fetch('https://api.coinmarketcap.com/v1/ticker/')
            .then(function(response) {
                return response.json();
            })
            .then((myJson) => {
    
                this.setState({ data: myJson })
                console.log(this.state.data)
            })
            .catch( function(err) {
                console.log(err)
            })
        }
        grabData()
    }

        // method for emitting a socket.io event
  send = () => {
    const socket = socketIOClient(this.state.endpoint)
    
    // this emits an event to the socket (your server) with an argument of 'red'
    // you can make the argument any color you would like, or any kind of data you want to send.
    console.log(this.state.color)
    socket.emit('change color', this.state.color) 
    // socket.emit('change color', 'red', 'yellow') | you can have multiple arguments
  }
  
    // adding the function
    setColor = (color) => {
        this.setState({ color })
      }

  // render method that renders in code if the state is updated
  render() {
    // Within the render method, we will be checking for any sockets.
    // We do it in the render method because it is ran very often.
    const socket = socketIOClient(this.state.endpoint)
    
    // socket.on is another method that checks for incoming events from the server
    // This method is looking for the event 'change color'
    // socket.on takes a callback function for the first argument
    socket.on('change color', (color) => {
      // setting the color of our button
      document.body.style.backgroundColor = color
    })

    let dataObj = this.state.data
    const data = dataObj.map((dataObj) =>

        <tr> 
            <td >{dataObj.rank}</td> 
            <td >{dataObj.name}</td> 
            <td >{dataObj.symbol}</td>
            <td >{dataObj.price_btc}</td>  
            <td >{dataObj.available_supply}</td>
            <td >{dataObj.total_supply}</td>  
            <td >{dataObj.percent_change_24h}</td> 
            <td >{dataObj.price_usd}</td>
            <form>
                <Button type="submit" id={dataObj.name} bsStyle="primary">Subscribe</Button> 
            </form>
        </tr>   
    )

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
                    <div className='table-div'>
                        <Table responsive>
                        <tbody>
                            <tr>
                                <th> Rank </th>
                                <th>name</th>
                                <th> Symbol </th>
                                <th> Price </th>
                                <th> Available Supply </th>
                                <th> Total Supply </th>
                                <th> last 24 hours </th>
                                <th> Price </th>
                            </tr>
                                {data}
                        </tbody>
                        </Table>
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

export default Dashboard
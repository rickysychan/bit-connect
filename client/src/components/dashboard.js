import React from 'react'
import socketIOClient from 'socket.io-client'
import { Button, Table } from 'react-bootstrap';
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
        this.grabData()
        setInterval(this.grabData, 5000)
    }
    grabData = async () => {
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
            </div>
        )
    }
}

export default Dashboard
import React from 'react'
import { Button, Table } from 'react-bootstrap';
import '../css/dashboard.css';


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
      }

    componentDidMount(){
        this.grabData()
        // setInterval(this.grabData, 5000)
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

    sendData = (e) =>{
        e.preventDefault();
        this.props.setMessage()
    }

  render() {

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
            <form action='http://localhost:5000/api/user/108508262530528259904/currencies' method='POST'>
                <input hidden value={dataObj.name} name='name'></input>
                <input hidden value={dataObj.symbol} name='symbol'></input>
                <input hidden value={dataObj.price_usd} name='priceAtSubscription'></input>
                <Button type="submit" id={dataObj.name} onClick={this.sendData} bsStyle="primary">Subscribe</Button> 
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
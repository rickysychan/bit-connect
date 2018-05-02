import React from 'react';
import { Button, Table } from 'react-bootstrap';


class userCurrency extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
      }

    componentDidMount(){
        this.grabData()
    }
    grabData = async () => {
        return fetch('/api/user/1/currencies')
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

        render() {

            let dataObj = this.state.data
            const data = dataObj.map((dataObj) =>
        
                <tr> 
                    <td >{dataObj.name}</td> 
                    <td >{dataObj.symbol}</td>
                    <td >{dataObj.priceAtSubscription}</td> 
                    <form>
                        <Button type="submit" id={dataObj.name} bsStyle="danger">remove</Button> 
                    </form>
                </tr>  
            )
            return (
                <div className='userCurrency-div'>
                    <h2> The Currency You are Following currency </h2>
                    <Table responsive>
                        <tbody>
                            <tr>
                                <th> Name </th>
                                <th> Symbol </th>
                                <th>Price At Subscription</th>
                            </tr>
                                {data}
                        </tbody>
                        </Table>

                </div>
             )
        }

}
export default userCurrency;
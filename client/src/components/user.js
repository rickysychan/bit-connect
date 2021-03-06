import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/user.css';

class UserPage extends React.Component {

    constructor() {
        super()
        this.state = {
            response: 'Hello!',
        }
      }
    
    componentDidMount() {
    this.callApi()
        .then(res => this.setState({ response: res }))
        .catch(err => console.log(err));
    }

    callApi = async () => {
    const response = await fetch('/api/user');
    const body = await response.json();
    console.log(body)

    if (response.status !== 200) throw Error(body.message);

    return body;
    };

    render() {
        let dataObj = this.state.response

        return (
            <div>
                <h2>Welcome back {dataObj[0].firstName}!</h2>
                    <div className='user-grid'>
                        <Grid>
                            <Row className="show-grid">
                                <Col md={6} mdPush={6}>
                                <Link to="/userCurrency">
                                    <i class="far fa-money-bill-alt"></i>
                                    <p> The Currency You are Following </p>
                                </Link>
                                </Col>
                                <Col md={6} mdPull={6}>
                                <Link to="/profile">
                                    <i class="fas fa-user-circle"></i>
                                    <p> Your Profile </p>
                                </Link>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
            </div>
        )
    }
}

export default UserPage
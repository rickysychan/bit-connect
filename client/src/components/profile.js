import React from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import '../css/profile.css';

class Profile extends React.Component {

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
                <h2>Your Profile</h2>
                    <div className='user-grid'>
                        <Grid>
                            <Row className="show-grid">
                                <Col Col xs={6} md={4}>
                                    <i class="fas fa-user-circle"></i>
                                </Col>
                                <Col xs={6} md={4} className='profile-details'>
                                <p> First Name: {dataObj[0].firstName} </p>
                                <p> Last Name: {dataObj[0].lastName} </p>
                                <p> Email: {dataObj[0].email} </p>
                                <p> Account Id: {dataObj[0].token_id} </p>
                                <Button bsStyle='primary'> Edit your Profile </Button> 
                                </Col>
                            </Row>
                        </Grid>
                    </div>
            </div>
        )
    }
}

export default Profile
import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import '../css/navbar.css';

class NavigationBar extends React.Component {
    render() {

        return (
            <Navbar className='navBar' inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="#brand">BitConnect</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavItem eventKey={1} href="/">
                        Dashboard
                    </NavItem>
                    <NavItem eventKey={2} href="/user">
                        User
                    </NavItem>
                    <NavItem eventKey={2} href="/user">
                        Notifications
                    </NavItem>
                    </Nav>
                    <Nav pullRight>
                    <NavItem eventKey={1} href="/login">
                        Login/signup
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
  }

  export default NavigationBar;
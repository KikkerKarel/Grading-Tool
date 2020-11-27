import * as React from "react";
import {Component} from "react";
import '../Button.css';
import {Button, Nav, Navbar} from "react-bootstrap";
import './Navbar.css';
import AuthService from "../../Services/auth.service"
import {Redirect} from 'react-router-dom'

class NavbarComponent extends Component {

    render() {
        return (
            <Navbar className="NavbarItems" expand="lg">
                <Navbar.Brand href="/">     <img
                    alt="Logo Citrus Andriessen"
                    src="/Images/CitrusAndriessen.png"
                    className="Citrus-logo"
                /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="nav-menu">
                    <Nav.Link className="nav-links" href="/courses">Courses</Nav.Link>
                        <Nav.Link className="nav-links" href="/examens">Examens</Nav.Link>
                        {this.getButton()}
                    </Nav>
            </Navbar>
        );
    }

    getButton()
    {
        if(AuthService.isLoggedIn())
            return <Button href="/logout" onClick={this.onLogOut} className="btn--medium" variant="primary">Log Out</Button>

        return <Button href="/login" className="btn--medium" variant="primary">Log in</Button>
    }

    onLogOut()
    {
        AuthService.logout();
        return <Redirect to='/login'/>
    }
}

export default NavbarComponent
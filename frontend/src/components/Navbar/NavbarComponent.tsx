import * as React from "react";
import './Navbar.css';
import {Component} from "react";
import '../Button.css';
import {Button, Nav, Navbar} from "react-bootstrap";

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
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto nav-menu">
                    <Nav.Link className="nav-links" href="/courses">Courses</Nav.Link>
                        <Nav.Link className="nav-links" href="/examens">Examens</Nav.Link>
                        <Button href="/logout" className="btn--medium" variant="primary">Log Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarComponent
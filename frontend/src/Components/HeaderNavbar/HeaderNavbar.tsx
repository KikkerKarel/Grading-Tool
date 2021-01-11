import * as React from "react";
import {Component} from "react";
import '../../Button.css';
import {Button, Nav, Navbar} from "react-bootstrap";
import './HeaderNavbar.css';
import AuthService from "../../Services/auth.service";
import {Redirect} from 'react-router-dom';

class HeaderNavbar extends Component {
    render() {
        return (
            <Navbar className="myNavbar" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        alt="Logo Citrus Andriessen"
                        src="/Images/CitrusAndriessen.png"
                        className="logo"
                        width="225"
                        height="56"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggleButton"/>
                <Navbar.Collapse style={{height: "80px"}}>
                    <div className="mr-auto"/>
                    <Nav className="nav-menu">
                        {this.ifAdmin()}
                        {this.getButton()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    ifAdmin() {
        let user: any = localStorage.getItem("user");

        if (user !== null && user.toLowerCase() === "admin" || user !== null && user.toLowerCase() === "stephan" ) {
            return (
                <>
                    <Nav.Link className="nav-item" href="/admin">Admin paneel</Nav.Link>
                    <Nav.Link className="nav-item" href="/profiel">Profiel</Nav.Link>
                    <Nav.Link className="nav-item" href="/examens">Examens</Nav.Link>
                </>
            )
        } else if (user !== null) {
            return (
                <>
                    <Nav.Link className="nav-item" href="/profiel">Profiel</Nav.Link>
                    <Nav.Link className="nav-item" href="/examens">Examens</Nav.Link>
                </>
            )
        }
    }

    getButton() {
        if (AuthService.isLoggedIn()) {
            return (
                <div className={"nav-item"}>
                    <Button href="/" onClick={this.onLogOut} className="btn--medium"
                            variant="primary">Uitloggen</Button>
                </div>
            )
        }
        return (
            <div className={"nav-item"}>
                <Button href="/inloggen" className="btn--medium" variant="primary">Inloggen</Button>
            </div>
        )
    }

    onLogOut() {
        AuthService.logout();
        return <Redirect to='/inloggen'/>
    }
}

export default HeaderNavbar
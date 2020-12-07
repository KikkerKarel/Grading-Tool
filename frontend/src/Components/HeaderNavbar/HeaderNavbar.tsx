import * as React from "react";
import {Component} from "react";
import '../../CSS/Button.css';
import {Button, Nav, Navbar} from "react-bootstrap";
import './HeaderNavbar.css';
import AuthService from "../../Services/auth.service";
import {Redirect} from 'react-router-dom';

class HeaderNavbar extends Component {
    render() {
        return (
            <Navbar className="NavbarItems" expand="lg">
                <Navbar.Brand href="/">
                    <img
                    alt="Logo Citrus Andriessen"
                    src="/Images/CitrusAndriessen.png"
                    className="Citrus-logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="nav-menu">
                        {this.ifAdmin()}
                        <Nav.Link className="nav-links" href="/examens">Examens</Nav.Link>
                        {this.getButton()}
                    </Nav>
            </Navbar>
        );
    }

    ifAdmin()
    {
        let user : any = localStorage.getItem("user");

        if( user !== null && user.toLowerCase() === "admin")
        return (
            <>
                <Nav.Link className="nav-links" href="/admin">Admin paneel</Nav.Link>
            </>
        )
    }

    getButton()
    {
        if(AuthService.isLoggedIn())
            return <Button href="/uitloggen" onClick={this.onLogOut} className="btn--medium" variant="primary">Uitloggen</Button>

        return <Button href="/inloggen" className="btn--medium" variant="primary">Inloggen</Button>
    }

    onLogOut()
    {
        AuthService.logout();
        return <Redirect to='/inloggen'/>
    }
}

export default HeaderNavbar
import * as React from "react";
import {Component} from "react";
import '../Navbar/Navbar.css';
import NavbarComponent from "../Navbar/NavbarComponent";
import Footer from "../Footer";
import '../../Dashboard.css'
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import AuthService from "../../Services/auth.service"
import {Redirect} from 'react-router-dom'

interface props {
    name? : string
}

class LoginPage extends Component<props> {

    state = {
        redirect: false,
        username : '',
        password :''
    }

    handleClick(event: any)
    {
        event.preventDefault();
        console.log(this.state);
        AuthService.login(this.state.username, this.state.password).then(data => {
            this.setState({redirect: true});
        })
    }

    render() {

        if(this.state.redirect || AuthService.isLoggedIn())
            return <Redirect to='/examens' />

        return (
            <div className="page-container">
                <div className="content-wrap d-flex justify-content-center">
                    <NavbarComponent/>

                    <h1>Inloggen</h1>

                    <div className=" mt-5">
                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Control onChange={(event) => { this.setState({username: event.target.value})}} type="username" placeholder="gebruikersnaam" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control onChange={(event) => { this.setState({password: event.target.value})}} type="password" placeholder="wachtwoord" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Onthoudt mij" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={(event) => this.handleClick(event)}>
                                Inloggen
                            </Button>
                        </Form>
                    </div>

                </div>

                <Footer/>
            </div>
        );
    }
}

export default LoginPage
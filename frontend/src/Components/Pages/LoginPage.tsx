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
        passwordHash :''
    }

    handleClick(event: any)
    {
        event.preventDefault();
        console.log(this.state);
        AuthService.login(this.state.username, this.state.passwordHash).then(data => {
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

                    <div className="py-5">
                    </div>

                    <h1>Login</h1>

                    <div className=" mt-5">
                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={(event) => { this.setState({username: event.target.value})}} type="username" placeholder="Username" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={(event) => { this.setState({passwordHash: event.target.value})}} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={(event) => this.handleClick(event)}>
                                Login
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
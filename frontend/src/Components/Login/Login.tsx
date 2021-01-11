import * as React from "react";
import {Component} from "react";
import {Alert, Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import AuthService from "../../Services/auth.service";
import {Redirect} from "react-router-dom";
import "./Login.css"
import {validateNames, validatePassword} from "./FormValidation";

class Login extends Component {
    state = {
        redirect: false,
        username: '',
        password: '',
    }

    handleClick(event: any) {
        event.preventDefault();

        let errrormessage: any = document.getElementById("errormessage");
        let errorbox: any = document.getElementsByClassName("errorbox")[0];

        if (!validateNames(this.state.username) || !validatePassword(this.state.password)) {
            errrormessage.innerText = "Vul een geldige gebruikersnaam en wachtwoord combinatie in.";
            errorbox.style.display = "block";
        } else {
            AuthService.login(this.state.username, this.state.password).then(() => {
                this.setState({redirect: true});
            }, error => {
                if (error.response.status === 401)
                    errrormessage.innerText = "Combinatie komt niet overeen, probeer het opnieuw.";
                errorbox.style.display = "block";
            })
        }
    }

    hideAlert() {
        let errorbox: any = document.getElementsByClassName("errorbox")[0];
        errorbox.style.display = "none";
    }

    render() {
        if (this.state.redirect || AuthService.isLoggedIn())
            return <Redirect to='./examens'/>

        return (
            <div className="mt-5 col-md-6">
                <Form>
                    <h1>Login</h1>

                    <Form.Group>
                        <Alert variant="danger errorbox" dismissible={true} onClose={() => this.hideAlert()}>
                            <Alert.Heading>Foutmelding:</Alert.Heading>
                            <Form.Text id="errormessage"/>
                        </Alert>
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Gebruikersnaam:</Form.Label>
                        <Form.Control onChange={(event) => {
                            this.setState({username: event.target.value})
                        }} type="username" placeholder="Gebruikersnaam"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Wachtwoord:</Form.Label>
                        <Form.Control onChange={(event) => {
                            this.setState({password: event.target.value})
                        }} type="password" placeholder="Wachtwoord"/>
                    </Form.Group>
                    <Button className="btn--medium btn btn-primary" type="submit"
                            onClick={(event) => this.handleClick(event)}>
                        Inloggen
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Login
import {Component} from "react";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import * as React from "react";
import AuthService from "../../Services/auth.service";
import {Redirect} from "react-router-dom";

class Login extends Component {
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
            <>
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
                            <Form.Control onChange={(event) => { this.setState({password: event.target.value})}} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(event) => this.handleClick(event)}>
                            Login
                        </Button>
                    </Form>
                </div>
            </>
        );
    }
}

export default Login
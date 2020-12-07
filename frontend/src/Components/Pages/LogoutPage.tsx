import {Component} from "react";
import AuthService from "../../Services/auth.service";
import {Redirect} from "react-router-dom";
import * as React from "react";

class LogoutPage extends Component{
    logout()
    {
        AuthService.logout();
        return <Redirect to='./login' />
    }

    render() {
        return this.logout()
    }
}

export default LogoutPage
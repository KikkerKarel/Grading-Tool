import * as React from "react";
import {Component} from "react";
import AuthService from "../../Services/auth.service";
import {Redirect} from "react-router-dom";

class LogoutPage extends Component {
    logout() {
        AuthService.logout();
        return <Redirect to='./inloggen'/>
    }
    componentDidMount() {
        document.title="Gradest | Uitloggen";
    }

    render() {
        return this.logout()
    }
}

export default LogoutPage
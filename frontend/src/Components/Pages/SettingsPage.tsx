import * as React from "react";
import '../HeaderNavbar/HeaderNavbar.css';
import {Component} from "react";
import Footer from "../Footer/Footer";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import AuthService from "../../Services/auth.service";

class SettingsPage extends Component {
    async componentDidMount() {
        if (!AuthService.isLoggedIn())
            window.location.replace("/inloggen");
    }

    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <HeaderNavbar/>
                </div>
                <div className="content-container">
                    <h1>Instellingen</h1>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default SettingsPage
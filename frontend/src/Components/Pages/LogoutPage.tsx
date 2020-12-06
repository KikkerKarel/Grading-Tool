import * as React from "react";
import {Component} from "react";
import '../HeaderNavbar/HeaderNavbar.css';
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import Footer from "../Footer/Footer";
import '../../CSS/Dashboard.css';
import AuthService from "../../Services/auth.service";

interface props {
}

class LogoutPage extends Component<props> {
    componentDidMount() {
        AuthService.logout();
    }

    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <HeaderNavbar/>
                </div>
                <section className="content-container">
                    <h1>U bent uitgelogd.</h1>
                </section>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default LogoutPage
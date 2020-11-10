import * as React from "react";
import {Component} from "react";
import '../Navbar/Navbar.css';
import NavbarComponent from "../Navbar/NavbarComponent";
import Footer from "../Footer";
import '../../Dashboard.css'
import AuthService from "../../Services/auth.service"

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
                    <NavbarComponent/>
                </div>
                <section className="content-container">
                    <h1>U bent uitgelogd</h1>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default LogoutPage
import * as React from "react";
import {Component} from "react";
import '../Navbar/Navbar.css';
import NavbarComponent from "../Navbar/NavbarComponent";
import Footer from "../Footer";
import '../../Dashboard.css'
import Login from   "../Login/Login";

interface props {
    name? : string
}

class LoginPage extends Component<props> {
    state = {
        redirect: false,
        username : '',
        password :''
    }

    render() {
        return (
            <div className="page-container">
                <div className="content-wrap d-flex justify-content-center">
                    <NavbarComponent/>
                    <Login/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default LoginPage
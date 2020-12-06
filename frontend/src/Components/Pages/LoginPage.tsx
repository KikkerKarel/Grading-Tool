import * as React from "react";
import {Component} from "react";
import '../HeaderNavbar/HeaderNavbar.css';
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import Footer from "../Footer/Footer";
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
                    <HeaderNavbar/>
                    <Login/>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default LoginPage
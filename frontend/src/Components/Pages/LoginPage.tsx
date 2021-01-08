import * as React from "react";
import {Component} from "react";
import '../HeaderNavbar/HeaderNavbar.css';
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";

interface props {
    name?: string
}

class LoginPage extends Component<props> {
    state = {
        redirect: false,
        username: '',
        password: ''
    }

    componentDidMount() {
        document.title="Gradest | Inloggen";
    }

    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <HeaderNavbar/>
                </div>
                <div className="content-container contentcenter mt-5">
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
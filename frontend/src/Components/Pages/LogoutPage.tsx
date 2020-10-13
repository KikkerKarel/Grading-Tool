import * as React from "react";
import '../Navbar/Navbar.css';
import {Component} from "react";
import NavbarComponent from "../Navbar/NavbarComponent";
import Footer from "../Footer";
import '../../Dashboard.css'

interface props {
}

class LogoutPage extends Component<props> {

    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <NavbarComponent/>
                </div>
                <section className="content-container">
                    <h1>beepboop</h1>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default LogoutPage
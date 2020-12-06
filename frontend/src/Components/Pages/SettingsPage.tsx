import * as React from "react";
import '../HeaderNavbar/HeaderNavbar.css';
import {Component} from "react";
import Footer from "../Footer/Footer";
import '../../CSS/Dashboard.css';
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";

interface props {
}

class SettingsPage extends Component<props> {
    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <HeaderNavbar />
                </div>
                <section className="content-container">
                    <h1>Instellingen</h1>
                </section>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default SettingsPage
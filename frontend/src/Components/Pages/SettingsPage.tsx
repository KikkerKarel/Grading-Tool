import * as React from "react";
import '../HeaderNavbar/HeaderNavbar.css';
import {Component} from "react";
import Footer from "../Footer/Footer";
import '../../Dashboard.css'
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
                    <h1>beepboop</h1>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default SettingsPage
import * as React from "react";
import './Navbar/Navbar.css';
import {Component} from "react";
import NavbarComponent from "./Navbar/NavbarComponent";
import Footer from "./Footer";
import '../Dashboard.css'

interface props {
}

class ExamensPage extends Component<props, {}> {
    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <NavbarComponent/>
                </div>

                <Footer/>
            </div>

        );
    }
}

export default ExamensPage
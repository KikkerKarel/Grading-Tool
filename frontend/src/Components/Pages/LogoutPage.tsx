import * as React from "react";
import '../Navbar/Navbar.css';
import {Component} from "react";
import NavbarComponent from "../Navbar/NavbarComponent";

import Footer from "../Footer";
import '../../Dashboard.css'
import QuickForm from "../QuickForm/QuickForm";

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
        <QuickForm data={[{"label":"test","type":"text","placeholder":"Hoi"}]}/>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default LogoutPage